const fieldValidation = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400)
           .json({ message: 'Some required fields are missing' }); 
}
    } catch (error) {
        return res.status(500).json(error.message);
    }
    next();
};

module.exports = {
    fieldValidation,
};