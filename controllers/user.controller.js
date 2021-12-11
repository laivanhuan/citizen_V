const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {users} = require('../models');
const {Response, Contants} = require('../utils');

const getAllUser = async (req, res) => {
    try {
        const userList = await users.findAll({limit: 10});
        const response = new Response(200, "", userList);
        res.status(200).send(response);
    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

const createUser = async (req, res) => {
    try {
        const {username, password, province_id, district_id, ward_id, village_id, role} = req.body;
        const hash_password = bcrypt.hashSync(password, 10);
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
        
        const user = await users.findOne({where: {username}, attibutes: ['id', 'username', 'password']});

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

module.exports = {
    getAllUser,
    createUser,
    authenticate
}