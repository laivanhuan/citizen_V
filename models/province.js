module.exports = function(sequelize, Sequelize) {
    const Province = sequelize.define('provinces', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        name: {
            type: Sequelize.STRING
        },
 
        code: {
            type: Sequelize.STRING,
            allowNull: false
        }
        
    }, {createdAt: false, updatedAt: false});

    return Province;
}