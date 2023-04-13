/**
 * 
 * @param {import ("sequelize").Sequelize} sequelize 
 * @param {import ("sequelize").DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define('PostCategory', {
       postId: {
        type: DataTypes.INTEGER,
        primaryKey: true
       },
       categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true
       }
    }, {
        tableName: 'posts_categories',
        underscored: true,
        timestamps: false
    });

    PostCategoryTable.associate = ({ Category, BlogPost }) => {
        Category.belongsToMany(BlogPost, {
            as: 'posts',
            foreignKey: 'category_id',
            otherKey: 'post_id',
            through: 'PostCategory'
        })

        BlogPost.belongsToMany(Category, {
            as: 'categories',
            foreignKey: 'post_id',
            otherKey: 'category_id',
            through: 'PostCategory'
        })
    }

    return PostCategoryTable;
};