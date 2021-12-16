const {persons} = require('../models');
const {Response} = require('../utils');

const getPerson = async (req, res) => {
    try {
        
    } catch (error) {
        const response = new Response(500, "Error!", error);
        res.status(500).send(response);
    }
}

const getPersonDetails = async (req, res) => {
    try {
        
    } catch (error) {
        const response = new Response(500, "Error!", error);
        res.status(500).send(response);
    }
}

const updatePersonInfo = async (req, res) => {
    try {
        
    } catch (error) {
        const response = new Response(500, "Error!", error);
        res.status(500).send(response);
    }
}

const createNewPerson = async (req, res) => {
    try {
        
    } catch (error) {
        const response = new Response(500, "Error!", error);
        res.status(500).send(response);
    }
}

const deletePersonInfo = async (req, res) => {
    try {
        
    } catch (error) {
        const response = new Response(500, "Error!", error);
        res.status(500).send(response);
    }
}

module.exports = {
    createNewPerson,
    updatePersonInfo,
    deletePersonInfo,
    getPerson,
    getPersonDetails
}