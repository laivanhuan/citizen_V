const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {users, Sequelize} = require('../models');
const {Response, Contants, HelpFunctions} = require('../utils');

const createUser = async (req, res) => {
    try {
        const {username, password, province_id, district_id, ward_id, village_id, role} = req.body;
        const hash_password = bcrypt.hashSync(password, 10);

        const isAddress = await HelpFunctions.checkAddress(province_id, district_id, ward_id, village_id);
        if(!isAddress) {
            const response = new Response(500, "Error: Address is wrong!");
            return res.status(500).send(response);
        }

        if(!role || !Contants.USER.ROLE[role]) {
            const response = new Response(500, "Error: Must have 'role' field.");
            return res.status(500).send(response);
        }

        if(Contants.USER.ROLE[role] !== Contants.USER.ROLE.ADMIN) {
            const whereQuery = (province_id && district_id && ward_id && village_id)? {province_id, district_id, ward_id, village_id} :
                                (province_id && district_id && ward_id)? {province_id, district_id, ward_id} :
                                (province_id && district_id)? {province_id, district_id} : {province_id};
            const userIsExist = await users.findOne({where: {...whereQuery}});
            if(userIsExist) {
                const response = new Response(500, "Error: User for this location is exist!");
                return res.status(500).send(response);
            }
        }

        const newUser = {
            username,
            role: Contants.USER.ROLE[role],
            password: hash_password,
            province_id,
            district_id,
            ward_id,
            village_id,
            created_by: req.user_data.id,
            updated_by: req.user_data.id,
            created: new Date(),
            updated: new Date()
        };
        await users.create(newUser);
        const response = new Response(200, "OK! User created.");
        res.status(200).send(response);
    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

const authenticate = async (req, res) => {
    try {
        const {username, password} = req.body;
        
        const user = await users.findOne({where: {username}});


        if(!user) {
            const response = new Response(500, "User not exist!");
            return res.status(500).send(response);
        }

        if(!bcrypt.compareSync(password, user.password)) {
            const response = new Response(500, "Username or password wrong! Try again.");
            return res.status(500).send(response);
        }

        const signData = {
            id: user.id,
            role: user.role,
            username: user.username,
            province_id: user.province_id,
            district_id: user.district_id,
            ward_id: user.ward_id,
            village_id: user.village_id,
            status: user.status
        }

        const access_token = jwt.sign(signData, process.env.SESSION_SECRET);
        res.status(200).send({access_token});
    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

const getAccountInfo = async (req, res) => {
    try {
        const id = req.user_data.id;
        const user = await users.findOne({
            where: {id},
            attributes: ['id', 'username', 'role', 'province_id', 'district_id', 'ward_id', 'village_id', 'status']
        });

        if(!user) {
            const response = new Response(404, "User not exist!");
            return res.status(404).send(response);
        }

        const response = new Response(200, "", user);
        res.status(200).send(response);
    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

const lockAccount = async (req, res) => {
    try {

        const {type, id} = req.params;

        const user = req.user_data;
        const account = await users.findOne({where: {id}});

        if(user.role >= account.role || user.role != -1) {
            const response = new Response(500, "Error! Permission denied.");
            return res.status(500).send(response);
        }

        const Op = Sequelize.Op;

        if(type == 'lock') {

            await users.update(
                {status: 0, updated_by: user.id, updated: new Date()}, 
                {where: {
                    username: {[Op.like]: `${account.username}%`}
                }
                });

            const response = new Response(200, "Success! User was locked.");
            return res.status(200).send(response);
        }else if(type == 'unlock'){

            await users.update(
                {status: 1, updated_by: user.id, updated: new Date()}, 
                {where: {
                    username: {[Op.like]: `${account.username}%`}
                }
                });

            const response = new Response(200, "Success! User was unlocked.");
            return res.status(200).send(response);
        }

        const response = new Response(500, "Error! Type not found.");
        res.status(500).send(response);
    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

const getChildUser = async (req, res) => {
    try {
        const user = req.user_data;

        if(user.role == Contants.USER.ROLE.ADMIN) {
            const { page = 1 } = req.query;
            const size = 6;

            const data = await users.findAndCountAll({
                limit: size,
                offset: (page - 1) * size,
                attributes: ['id', 'username', 'province_id', 'district_id', 'ward_id', 'village_id', 'status', 'role']
            });
    
            const response = new Response(200, "", data);
            return res.status(200).send(response);
        }

        const Op = Sequelize.Op;
        const userList = await users.findAndCountAll({
            attributes: ['id', 'username', 'province_id', 'district_id', 'ward_id', 'village_id', 'status', 'role'],
            where: {
                username: {[Op.like]: `${user.username}%`}
            }
        });

        const response = new Response(200, "", userList);
        res.status(200).send(response);
    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

module.exports = {
    createUser,
    authenticate,
    getAccountInfo,
    lockAccount,
    getChildUser
}