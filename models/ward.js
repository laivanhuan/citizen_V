module.exports = function(sequelize, Sequelize) {
    const Ward = sequelize.define('wards', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        name: {
            type: Sequelize.STRING
        },
 
        prefix: {
            type: Sequelize.STRING
        },

        province_id: {
            type: Sequelize.INTEGER
        },

        district_id: {
            type: Sequelize.INTEGER
        }
        
    }, {createdAt: false, updatedAt: false});

    return Ward;
}