const {declarations} = require('../models');
const {Response} = require('../utils');

const getDeclaration = async (req, res) => {
    try {
        const { page = 1 } = req.query;
        const size = 10;

        const data = await declarations.findAll({
            limit: size,
            offset: (page - 1) * size,
            attributes: ['id', 'title', 'time_start', 'time_end', 'created', 'updated']
        });

        const response = new Response(200, "", data);
        res.status(200).send(response);

    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

const createNewDeclaration = async (req, res) => {
    try {
        const {title, time_start, time_end} = req.body;

        if(!title || !time_end || !time_start) {
            const response = new Response(500, "Missing require field.");
            return res.status(500).send(response);
        }

        const newDeclaration = {
            title,
            time_start,
            time_end,
            created_by: req.user_data.id,
            updated_by: req.user_data.id,
            created: new Date(),
            updated: new Date()
        }

        await declarations.create(newDeclaration);

        const response = new Response(200, "Success! A declaration was created.");
        res.status(500).send(response);

    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

const updateDeclaration = async (req, res) => {
    try {
        const {id, title, time_start, time_end} = req.body;

        if(!id || !title || !time_end || !time_start) {
            const response = new Response(500, "Missing require field.");
            return res.status(500).send(response);
        }

        const oldDeclaration = await declarations.findOne({where: {id}});

        if(!oldDeclaration) {
            const response = new Response(500, "Declaration does not exist.");
            return res.status(500).send(response);
        }

        const updateData = {
            title,
            time_start,
            time_end,
            updated_by: req.user_data.id,
            updated: new Date()
        }

        await declarations.update(updateData, {where: {id}});

        const response = new Response(200, "Success! A declaration was updated.");
        res.status(500).send(response);

    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

const deleteDeclaration = async (req, res) => {
    try {
        const { id } = req.body;

        if(!id) {
            const response = new Response(500, "Missing require field.");
            return res.status(500).send(response);
        }

        const oldDeclaration = await declarations.findOne({where: {id}});

        if(!oldDeclaration) {
            const response = new Response(500, "Declaration does not exist.");
            return res.status(500).send(response);
        }

        await declarations.delete({where: {id}});

        const response = new Response(200, "Success! A declaration was deleted.");
        res.status(500).send(response);

    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}


module.exports = {
    createNewDeclaration,
    updateDeclaration,
    getDeclaration,
    deleteDeclaration
}