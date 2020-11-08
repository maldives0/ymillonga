const DataTypes = require('sequelize');
const { Model } = DataTypes;


module.exports = class Hashtag extends Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
        }, {
            modelName: 'Hashtag',
            tableName: 'Hashtags',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            sequelize,
        });
    }
    static associations(db) {
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
    }
};
