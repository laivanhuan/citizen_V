const {Response, Contants} = require('../utils');

module.exports = (req, res, next) => {
    if (req.user_data.role == Contants.USER.ROLE.ADMIN) {
        next();
    } else {
        const response = new Response(403, 'Permission denied.');
        return res.status(403).send(response);
    }
};