const { BlogPost, Category, User, PostCategory } = require('../models');
const { decodToken } = require('../utils/auth');

const postPost = async (title, content, categoryIds, token) => {
    const validIdCate = await Category.findAll();
    const idCategory = validIdCate.map((a) => a.id);
    const categoryId = categoryIds.every((a) => idCategory.includes(a));

    if (!categoryId) {
         return { type: 400, message: { message: 'one or more "categoryIds" not found' } }; 
    }

    const { email } = decodToken(token);

    const { dataValues: { id } } = await User.findOne({ where: { email } });
    const saveBlog = await BlogPost.create({ title, content, userId: id });
    
    await Promise.all(categoryIds.map((a) => PostCategory.create({
        postId: saveBlog.id, categoryId: a })));

    const newObject = { id: saveBlog.id,
        title,
        content,
        userId: id,
        updated: saveBlog.updated,
        published: saveBlog.published };

    return { type: 201, message: newObject };
};

module.exports = {
    postPost,
};