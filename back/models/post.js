const DataTypes = require('sequelize');
const { Model } = DataTypes;
module.exports = class User extends Model {
    static init(sequelize) {
        return super.init({
            content: { //Row
                type: DataTypes.TEXT,
                allowNull: false,
            },

        },
            {//Cor
                modelName: 'Post',
                tableName: 'posts',
                charset: 'utf8mb4',
                collate: 'utf8mb4_general_ci',
                sequelize,
            });
    }
    static associate(db) {
        db.Post.belongsTo(db.User);// post.addUser, post.getUser, post.setUser
        db.Post.hasMany(db.Report);
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
        db.Post.belongsToMany(db.User, {
            through: 'Like', as: 'Likers'
        });
        db.Post.belongsTo(db.Post, { as: 'Retweet' });
    }
};