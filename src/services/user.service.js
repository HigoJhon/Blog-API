const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const postUser = async (displayName, email, password, image) => {
    const all = { displayName, email, password, image };
    const invalidEmail = await User.findOne({ where: { email } });

    if (invalidEmail) return { type: 409, message: { message: 'User already registered' } };
    const criateUser = await User.create(all);

    const token = generateToken(criateUser.dataValues);
    return { type: 201, message: { token } };
};

const getUser = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return { type: 200, message: users };
};

module.exports = {
    postUser,
    getUser,
};