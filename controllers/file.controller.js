const {files} = require('../models');
const {Response} = require('../utils');

const getFiles = async (_, res) => {
    try {
        const data = await files.findAndCountAll({});
        const response = new Response(200, "", data);
        res.status(200).send(response);
    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

const upload = async (req, res) => {
    try {
        const user_id = req.user_data.id;
        const file = req.file;
        if (!file) {
            const response = new Response(400, 'File not found! Upload again');
            return res.status(400).send(response);
        }

        const path = req.file.originalname;
        const fileObj = {
            upload_by: user_id,
            upload_at: new Date(),
            path: `/public/files/${file.filename}`
        }

        await files.create(fileObj);

        const response = new Response(200, 'Success' , {path: `/public/files/${file.filename}`});
        res.status(200).send(response);

    } catch (error) {
        const response = new Response(500, 'Error' ,error);
        res.status(500).send(response);
    }
}

module.exports = {
    upload,
    getFiles
}