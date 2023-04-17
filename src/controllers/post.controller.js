const postService = require('../services/post.service');

const postPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { authorization } = req.headers;

    try {
        const { type, message } = await postService
        .postPost(title, content, categoryIds, authorization);
    
        return res.status(type).json(message);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const getPost = async (req, res) => {
    try {
        const { type, message } = await postService.getPost();
        return res.status(type).json(message);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const getPostId = async (req, res) => {
    try {
        const { id } = req.params;
        const { type, message } = await postService.getPostId(id);
        return res.status(type).json(message);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const putPost = async (req, res) => {
    const { id } = req.params;
    const { authorization } = req.headers;
    try {
        const { type, message } = await postService.putPost(req.body, id, authorization);
        return res.status(type).json(message);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {
    postPost,
    getPost,
    getPostId,
    putPost,
};