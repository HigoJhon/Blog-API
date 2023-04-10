const loginService = require('../services/login.service');

const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { type, message } = await loginService.authenticate(email, password);
        res.status(type).json(message);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {
    postLogin,
};