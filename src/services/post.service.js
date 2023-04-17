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

const getPost = async () => {
    const blogPost = await BlogPost.findAll({ include: [{
            model: User,
            as: 'user',
            attributes: { exclude: ['password'] },
        }, {
            model: Category,
            as: 'categories',
            through: { attributes: [] },
        }],
    });
    return { type: 200, message: blogPost };
};

const getPostId = async (id) => {
    const postId = await BlogPost.findOne({
        where: { id },
        include: [{
            model: User,
            as: 'user',
            attributes: { exclude: ['password'] },
        }, {
            model: Category,
            as: 'categories',
            through: { attributes: [] },
        }],
    });
    if (!postId) return { type: 404, message: { message: 'Post does not exist' } };

    return { type: 200, message: postId };
};

const putPost = async (postObj, id, token) => {
    const post = await BlogPost.findOne({
        where: { id },
        include: [{
            model: Category,
            as: 'categories',
            through: { attributes: [] },
        }],
    });
    console.log('cheguei assim :', post, 'eee tamebm', id);
    
    const { email } = decodToken(token);
    
    // const { dataValues: { id } } = await User.findOne({
    //     where: { email },
    // });
    
    const { dataValues } = await User.findOne({ where: { email } });

    if (post.userId !== dataValues.id) { 
        return { type: 401, message: { message: 'Unauthorized user' } }; 
    }
    await post.update(postObj);

    return { type: 200, message: post };
};

module.exports = {
    postPost,
    getPost,
    getPostId,
    putPost,
};