const validCategory = (req, res, next) => {
    const { name } = req.body;
    try {
        if (!name) return res.status(400).json({ message: '"name" is required' });
    } catch (error) {
        return res.status(500).json(error.message);
    }
    next();
};

module.exports = {
    validCategory,
};