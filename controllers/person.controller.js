const {persons, declarations} = require('../models');
const {Response} = require('../utils');

const getPerson = async (req, res) => {
    try {
        const{ declaration_id, province_id, ward_id, district_id, village_id } = req.query;
        if(!declaration_id) {
            const response = new Response(500, "Missing require field!");
            return res.status(500).send(response);
        }

        let queryObj = {declaration_id};
        queryObj = province_id?{...queryObj, province_id}:queryObj;
        queryObj = district_id?{...queryObj, district_id}:queryObj;
        queryObj = ward_id?{...queryObj, ward_id}:queryObj;
        queryObj = village_id?{...queryObj, village_id}:queryObj;


        const declaration = await declarations.findOne({where: {id: declaration_id}});
        if(!declaration) {
            const response = new Response(500, "Declaration does not exist!");
            return res.status(500).send(response);
        }

        const { page = 1 } = req.query;
        const size = 20;

        const data = await persons.findAndCountAll({
            limit: size,
            offset: (page - 1) * size,
            where: queryObj
        });

        const response = new Response(200, "", data);
        res.status(200).send(response);

    } catch (error) {
        const response = new Response(500, "Error!", error);
        res.status(500).send(response);
    }
}

const getPersonDetails = async (req, res) => {
    try {
        const {id} = req.params;
        const person = await persons.findOne({where: {id}});
        if(!person) {
            const response = new Response(404, "404 Not found!");
            res.status(404).send(response);
        }
        const response = new Response(200, "", person);
        res.status(500).send(response);
    } catch (error) {
        const response = new Response(500, "Error!", error);
        res.status(500).send(response);
    }
}

const updatePersonInfo = async (req, res) => {
    try {
        const {id} = req.params;
        const {
            declaration_id,
            first_name,
            last_name,
            id_number,
            date_of_birth,
            sex,
            education_level,
            married,
            job,
            province_id,
            district_id,
            ward_id,
            village_id,
            o_province_id,
            o_district_id,
            o_ward_id,
            o_village_id,
            p_province_id,
            p_district_id,
            p_ward_id,
            p_village_id,
        } = req.body;

        const [person, declaration] = await Promise.all([
            persons.findOne({where: {id}}),
            declarations.findOne({where: {id: declaration_id}})
        ]);

        if(!person || !declaration 
            || !province_id || !district_id || !ward_id || !village_id
            || !o_province_id || !o_district_id || !o_ward_id || !o_village_id
            || !p_province_id || !p_district_id || !p_ward_id || !p_village_id) {
                const response = new Response(500, "Error! Missing require fields or data wrong.");
                return res.status(500).send(response);
            }

        const updatePerson = {
            declaration_id,
            first_name,
            last_name,
            id_number,
            date_of_birth,
            sex,
            education_level,
            married,
            job,
            province_id,
            district_id,
            ward_id,
            village_id,
            o_province_id,
            o_district_id,
            o_ward_id,
            o_village_id,
            p_province_id,
            p_district_id,
            p_ward_id,
            p_village_id,
            updated_by: req.user_data.id,
            updated: new Date()
        }

        await persons.update(updatePerson, {where: {id}});

        const response = new Response(200, "Success! Updated.");
        res.status(200).send(response);

    } catch (error) {
        const response = new Response(500, "Error!", error);
        res.status(500).send(response);
    }
}

const createNewPerson = async (req, res) => {
    try {
        const {
            declaration_id,
            first_name,
            last_name,
            id_number,
            date_of_birth,
            sex,
            education_level,
            married,
            job,
            province_id,
            district_id,
            ward_id,
            village_id,
            o_province_id,
            o_district_id,
            o_ward_id,
            o_village_id,
            p_province_id,
            p_district_id,
            p_ward_id,
            p_village_id,
        } = req.body;

        const declaration = await declarations.findOne({where: {id: declaration_id}});

        if(!declaration) {
            const response = new Response(500, "Error! Declaration was wrong.");
            return res.status(500).send(response);
        }

        const time = new Date();
        const dec_time_start = new Date(declaration.time_start);
        const dec_time_end = new Date(declaration.time_end);

        if(time > dec_time_end || time < dec_time_start) {
            const response = new Response(500, "Error! Declaration was outdated or comming soon.");
            return res.status(500).send(response);
        }

        if( !province_id || !district_id || !ward_id || !village_id
            || !o_province_id || !o_district_id || !o_ward_id || !o_village_id
            || !p_province_id || !p_district_id || !p_ward_id || !p_village_id) {
                const response = new Response(500, "Error! Missing require fields or data wrong.");
                return res.status(500).send(response);
            }

        const newPerson = {
            declaration_id,
            first_name,
            last_name,
            id_number,
            date_of_birth,
            sex,
            education_level,
            married,
            job,
            province_id,
            district_id,
            ward_id,
            village_id,
            o_province_id,
            o_district_id,
            o_ward_id,
            o_village_id,
            p_province_id,
            p_district_id,
            p_ward_id,
            p_village_id,
            created_by: req.user_data.id,
            updated_by: req.user_data.id,
            created: new Date(),
            updated: new Date()
        }

        await persons.create(newPerson);

        const response = new Response(200, "Success!");
        res.status(200).send(response);

    } catch (error) {
        const response = new Response(500, "Error!", error);
        res.status(500).send(response);
    }
}

const deletePersonInfo = async (req, res) => {
    try {
        const {id} = req.params;
        const person = await persons.findOne({where: {id}});
        if(!person) {
            const response = new Response(404, "404 Not found!");
            return res.status(404).send(response);
        }
        await persons.destroy({where: {id}});
        const response = new Response(200, "Success! Deleted.");
        res.status(500).send(response);

    } catch (error) {
        const response = new Response(500, "Error!", error);
        res.status(500).send(response);
    }
}

module.exports = {
    createNewPerson,
    updatePersonInfo,
    deletePersonInfo,
    getPerson,
    getPersonDetails
}