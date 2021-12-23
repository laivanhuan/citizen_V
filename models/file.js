module.exports = function(sequelize, Sequelize) {
    const Province = sequelize.define('files', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        path: {
            type: Sequelize.STRING
        },
 
        upload_by: {
            type: Sequelize.INTEGER
        },

        upload_at: {
            type: Sequelize.DATE
        }
        
    }, {createdAt: false, updatedAt: false});

    return Province;
}