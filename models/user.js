module.exports = function(sequelize, Sequelize) {
    const User = sequelize.define('users', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        username: {
            type: Sequelize.STRING
        },

        password: {
            type: Sequelize.STRING
        },

        role: {
            type: Sequelize.INTEGER
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

        village_id: {
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

        status: {
            type: Sequelize.INTEGER
        }
        
        
    }, {createdAt: false, updatedAt: false});

    return User;
}