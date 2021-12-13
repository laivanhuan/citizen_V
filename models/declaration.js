module.exports = function(sequelize, Sequelize) {
    const Declaration = sequelize.define('declarations', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        time_start: {
            type: Sequelize.DATE
        },

        time_end: {
            type: Sequelize.DATE
        },
 
        title: {
            type: Sequelize.STRING
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
        
    }, {createdAt: false, updatedAt: false});

    return Declaration;
}