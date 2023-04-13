const PostService = require('../services/post.service');

const postPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { authorization } = req.headers;

    try {
        const { type, message } = await PostService
        .postPost(title, content, categoryIds, authorization);
    
        return res.status(type).json(message);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {
    postPost,
};