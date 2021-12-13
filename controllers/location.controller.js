const {provinces, districts, wards, villages, sequelize} = require('../models');
const {Response} = require('../utils');

const getLocation = async (req, res) => {
    try {
        const {city, district, ward} = req.query;
        
        if(city && district && ward) {
            const results = await villages.findAll({
                where: {province_id: city, district_id: district, ward_id: ward},
                attributes: ['id', [sequelize.fn('CONCAT', sequelize.col('prefix'), ' ', sequelize.col('name')), 'name'], 'province_id', 'district_id', 'ward_id']
            });
            const response = new Response(200, "", results);
            return res.status(200).send(response);
        } else if(city && district) {
            const results = await wards.findAll({
                where: {province_id: city, district_id: district},
                attributes: ['id', [sequelize.fn('CONCAT', sequelize.col('prefix'), ' ', sequelize.col('name')), 'name'], 'province_id', 'district_id']
            });
            const response = new Response(200, "", results);
            return res.status(200).send(response);
        } else if(city) {
            const results = await districts.findAll({
                where: {province_id: city},
                attributes: ['id', [sequelize.fn('CONCAT', sequelize.col('prefix'), ' ', sequelize.col('name')), 'name'], 'province_id']
            });
            const response = new Response(200, "", results);
            return res.status(200).send(response);
        }
        
        const provinceList = await provinces.findAll();
        const response = new Response(200, "", provinceList);
        res.status(200).send(response);
    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

module.exports = {
    getLocation,
}