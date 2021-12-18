const {districts, wards, villages} = require('../models');

const checkAddress = async (province_id=null, district_id=null, ward_id=null, village_id=null) => {
    let flag = false;
    if(province_id && district_id && ward_id && village_id) {
        const address = await villages.findOne({where: {province_id, district_id, ward_id, id: village_id}});
        if(address) flag = true;
    } else if(province_id && district_id && ward_id) {
        const address = await wards.findOne({where: {province_id, district_id, id: ward_id}});
        if(address) flag = true;
    } else if(province_id && district_id) {
        const address = await districts.findOne({where: {province_id, id: district_id}});
        if(address) flag = true;
    }
    return flag;
}

module.exports = {
    checkAddress
}
