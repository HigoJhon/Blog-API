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

const validToken = (payload) => {
    const token = jwt.verify(payload, secretKey);
    return token;
};

const decodToken = (token) => {
    const data = jwt.decode(token, secretKey);
    return data;
};

module.exports = {
    generateToken,
    validToken,
    decodToken,
};