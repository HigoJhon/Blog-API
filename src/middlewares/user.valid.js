const validUser = async (req, res, next) => {
    const { displayName, email, password } = req.body;
    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    try {
        if (!emailValid.test(email)) {
            return res.status(400).json({ message: '"email" must be a valid email' });
}
        if (displayName.length < 8) {
            return res.status(400)
            .json({ message: '"displayName" length must be at least 8 characters long' });
}
       if (password.length < 6) {
            return res.status(400)
            .json({ message: '"password" length must be at least 6 characters long' });
}
    } catch (error) {
        return res.status(500).json(error.message);
    }
    next();
};

module.exports = {
    validUser,
};