const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const authenticate = async (email, password) => {
    const loginUser = await User.findOne({ where: { email, password } });

    if (!loginUser) return { type: 400, message: { message: 'Invalid fields' } };

    const token = generateToken(loginUser.dataValues);

    return { type: 200, message: { token } };
};

module.exports = {
    authenticate,
};
