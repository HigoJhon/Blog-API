
/**
 * 
 * @param {import ("sequelize").Sequelize} sequelize 
 * @param {import ("sequelize").DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
            displayName: DataTypes.STRING(255),
            email: DataTypes.STRING(255),
            password: DataTypes.STRING(255),
            image: DataTypes.STRING(255)
    }, {
        tableName: 'Users',
        underscored: true
    })
    return User;
}