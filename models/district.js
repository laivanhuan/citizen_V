module.exports = function(sequelize, Sequelize) {
    const District = sequelize.define('districts', {
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

        code: {
            type: Sequelize.STRING
        },
        
    }, {createdAt: false, updatedAt: false});

    return District;
}