const {provinces, districts, wards, villages, sequelize} = require('../models');
const {Response, Contants, HelpFunctions} = require('../utils');

const getLocation = async (req, res) => {
    try {
        const {city, district, ward} = req.query;
        
        if(city && district && ward) {
            const results = await villages.findAll({
                where: {province_id: city, district_id: district, ward_id: ward},
                attributes: ['id', [sequelize.fn('CONCAT', sequelize.col('prefix'), ' ', sequelize.col('name')), 'name'], 'province_id', 'district_id', 'ward_id', 'code']
            });
            const response = new Response(200, "", results);
            return res.status(200).send(response);
        } else if(city && district) {
            const results = await wards.findAll({
                where: {province_id: city, district_id: district},
                attributes: ['id', [sequelize.fn('CONCAT', sequelize.col('prefix'), ' ', sequelize.col('name')), 'name'], 'province_id', 'district_id', 'code']
            });
            const response = new Response(200, "", results);
            return res.status(200).send(response);
        } else if(city) {
            const results = await districts.findAll({
                where: {province_id: city},
                attributes: ['id', [sequelize.fn('CONCAT', sequelize.col('prefix'), ' ', sequelize.col('name')), 'name'], 'province_id', 'code']
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

const createVillage = async (req, res) => {
    try {
        const {province_id, district_id, ward_id, name, prefix} = req.body;

        if(!name || !prefix) {
            const response = new Response(500, "Missing require field.");
            return res.status(500).send(response)
        }

        const [province, district, ward] = await Promise.all([
            provinces.findOne({where: {id: province_id}}),
            districts.findOne({where: {id: district_id}}),
            wards.findOne({where: {id: ward_id}})
        ]);

        if(!province || !district || !ward) {
            const response = new Response(500, "Address error!");
            return res.status(500).send(response)
        }

        const village = {
            province_id, 
            district_id, 
            ward_id, 
            name, 
            prefix,
            created_by: req.user_data.id,
            updated_by: req.user_data.id,
            created: new Date(),
            updated: new Date()
        }

        await villages.create(village);

        const response = new Response(200, "Success! A village was created.");
        res.status(200).send(response);

    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

const createCodeLocation = async (req, res) => {
    try {

        const {
            code,
            province_id,
            district_id,
            ward_id,
            village_id
        } = req.body;

        const {type} = req.params;

        if(!code || !province_id || (!district_id && !ward_id && !village_id)) {
            const response = new Response(500, "Error! Missing require fields.");
            return res.status(500).send(response);
        }

        const isAddress = await HelpFunctions.checkAddress(province_id, district_id, ward_id, village_id);
        if(!isAddress) {
            const response = new Response(500, "Error: Address is wrong!");
            return res.status(500).send(response);
        }

        if(type == Contants.LOCATION.TYPE.DISTRICT) {
            const hasCode = await verifyHasCode(districts, district_id);
            if(hasCode) {
                const response = new Response(500, "Error! Code is exist.");
                return res.status(500).send(response);
            }
            await districts.update({code}, {where: {id: district_id}});
        } else if(type == Contants.LOCATION.TYPE.WARD) {
            const hasCodeDistrict = await verifyHasCode(districts, district_id);
            if(!hasCodeDistrict) {
                const response = new Response(500, "Error! The district does not have code.");
                return res.status(500).send(response);
            }
            const hasCode = await verifyHasCode(wards, ward_id);
            if(hasCode) {
                const response = new Response(500, "Error! Code is exist.");
                return res.status(500).send(response);
            }
            await wards.update({code}, {where: {id: ward_id}});
        } else if(type == Contants.LOCATION.TYPE.VILLAGE) {
            const hasCodeDistrict = await verifyHasCode(districts, district_id);
            if(!hasCodeDistrict) {
                const response = new Response(500, "Error! The district does not have code.");
                return res.status(500).send(response);
            }
            const hasCodeWard = await verifyHasCode(wards, ward_id);
            if(!hasCodeWard) {
                const response = new Response(500, "Error! The ward does not have code.");
                return res.status(500).send(response);
            }
            const hasCode = await verifyHasCode(villages, village_id);
            if(hasCode) {
                const response = new Response(500, "Error! Code is exist.");
                return res.status(500).send(response);
            }
            await villages.update({code, updated: new Date(), updated_by: req.user_data.id}, {where: {id: village_id}});
        }

        const response = new Response(200, "Success! Code was added");
        res.status(200).send(response);
    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

const verifyHasCode = async (model, id) => {
    const address = await model.findOne({where: {id}});
    if (!address || !address.code) return false;
    return true;
}

module.exports = {
    getLocation,
    createVillage,
    createCodeLocation
}