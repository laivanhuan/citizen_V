const {provinces} = require('../models');
const {Response} = require('../utils');

const getProvinces = async (req, res) => {
    try {
        const provinceList = await provinces.findAll({limit: 10});
        const response = new Response(200, "", provinceList);
        res.status(200).send(response);
    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

module.exports = {
    getProvinces,
}