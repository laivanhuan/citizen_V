module.exports = function(sequelize, Sequelize) {
    const Village = sequelize.define('villages', {
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
        },

        ward_id: {
            type: Sequelize.INTEGER
        },

        created_by: {
            type: Sequelize.INTEGER
        },

        updated_by: {
            type: Sequelize.INTEGER
        },

        created: {
            type: Sequelize.DATE
        },

        updated: {
            type: Sequelize.DATE
        },

        code: {
            type: Sequelize.STRING
        },
        
    }, {createdAt: false, updatedAt: false});

    return Village;
}