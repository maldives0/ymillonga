const DataTypes = require('sequelize');
const { Model } = DataTypes;
module.exports = class User extends Model {
    static init(sequelize) {
        return super.init({
            src: {
                type: DataTypes.STRING(200),
                allowNull: false,
            },
        },
            {
                modelName: 'Image',
                tableName: 'Images',
                charset: 'utf8',
                collate: 'utf8_general_ci',
                sequelize,
            });
    }
    static associate(db) {
        db.Image.belongsTo(db.Post);
    }
};