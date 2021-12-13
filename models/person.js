module.exports = function(sequelize, Sequelize) {
    const Person = sequelize.define('persons', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        first_name: {
            type: Sequelize.STRING
        },
 
        last_name: {
            type: Sequelize.STRING
        },

        id_number: {
            type: Sequelize.STRING
        },

        date_of_birth: {
            type: Sequelize.DATE
        },

        sex: {
            type: Sequelize.INTEGER
        },

        education_level: {
            type: Sequelize.INTEGER
        },

        married: {
            type: Sequelize.INTEGER
        },

        declaration_id: {
            type: Sequelize.INTEGER
        },

        job: {
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

        village_id: {
            type: Sequelize.INTEGER
        },

        o_province_id: {
            type: Sequelize.INTEGER
        },

        o_district_id: {
            type: Sequelize.INTEGER
        },

        o_ward_id: {
            type: Sequelize.INTEGER
        },

        o_village_id: {
            type: Sequelize.INTEGER
        },

        p_province_id: {
            type: Sequelize.INTEGER
        },

        p_district_id: {
            type: Sequelize.INTEGER
        },

        p_ward_id: {
            type: Sequelize.INTEGER
        },

        p_village_id: {
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
        
    }, {createdAt: false, updatedAt: false});

    return Person;
}