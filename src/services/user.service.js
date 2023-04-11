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

const getId = async (id) => {
    const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    if (!user) return { type: 404, message: { message: 'User does not exist' } };
    return { type: 200, message: user };
};

module.exports = {
    postUser,
    getUser,
    getId,
};