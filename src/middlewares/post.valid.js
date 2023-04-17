const validPost = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    try {
        if (!title || !content || !categoryIds) { 
            return res.status(400).json({ message: 'Some required fields are missing' }); 
        }
    } catch (error) {
        return res.status(500).json(error.message);
    }
    next();
};

const validPutPost = (req, res, next) => {
    const { title, content } = req.body;
    try {
        if (!title || !content) { 
            return res.status(400).json({ message: 'Some required fields are missing' }); 
        }
    } catch (error) {
        return res.status(500).json(error.message);
    }
    next();
};

module.exports = {
    validPost,
    validPutPost,
};