const userService = require('../services/user.service');

const postUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const { type, message } = await userService.postUser(displayName, email, password, image);
    
    try {
        res.status(type).json(message);
    } catch (error) {
        console.log(error);
        res.status(500).json('intenal error');
    }
};

module.exports = {
    postUser,
};