/**
 * 
 * @param {import ("sequelize").Sequelize} sequelize 
 * @param {import ("sequelize").DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
    const BlogTable = sequelize.define('BlogPost', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: {
            type: DataTypes.INTEGER,
            foreignkey: true,
        },
          published: {
           type: DataTypes.DATE,
           defaultValues: DataTypes.NOW
        },
          updated: {
            type: DataTypes.DATE,
            defaultValues: DataTypes.NOW
         },
    }, {
        tableName: 'blog_posts',
        underscored:true,
        createdAt: 'published',
        updatedAt: 'updated',
    });

    BlogTable.associate = (models) => {
        BlogTable.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });
    };

    return BlogTable;
};