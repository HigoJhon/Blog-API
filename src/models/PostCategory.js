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
        tableName: 'post_categories',
        underscored: true,
        timestamps: false
    });

    PostCategoryTable.associate = ({ Category, BlogPost }) => {
        Category.belongsToMany(BlogPost, {
            as: 'posts',
            foreignKey: 'categoryId',
            otherKey: 'postId',
            through: PostCategoryTable
        })

        BlogPost.belongsToMany(Category, {
            as: 'categories',
            foreignKey: 'postId',
            otherKey: 'categoryId',
            through: PostCategoryTable
        })
    }

    return PostCategoryTable;
};