const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;
const cofigJWT = {
    expiresIn: '3d',
    algorithm: 'HS256',
};

const generateToken = (payload) => {
    const token = jwt.sign(payload, secretKey, cofigJWT);
    return token;
};

module.exports = {
    generateToken,
};