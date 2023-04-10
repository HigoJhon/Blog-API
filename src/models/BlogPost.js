/**
 * 
 * @param {import ("sequelize").Sequelize} sequelize 
 * @param {import ("sequelize").DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
    const BlogTable = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: {
            type: DataTypes.INTEGER,
            foreignkey: true,
        },
          published: DataTypes.DATE,
          updated: DataTypes.DATE,
    }, {
        tableName: 'blog_posts',
        underscored:true,
        createdAt: 'published',
        updatedAt: 'updated',
    });

    BlogTable.associate = (models) => {
        BlogTable.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });
    };

    return BlogTable;
};