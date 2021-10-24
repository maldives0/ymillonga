const DataTypes = require("sequelize");
const { Model } = DataTypes;
module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: DataTypes.STRING(30),
          allowNull: false, //필수값으로 설정
          unique: true,
        },
        nickname: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        snsId: {
          type: DataTypes.STRING(30),
          allowNull: true,
        },
        provider: {
          type: DataTypes.STRING(10),
          allowNull: false,
          defaultValue: "local",
        },
      },
      {
        modelName: "User",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.hasMany(db.Report);
    db.User.belongsToMany(db.Post, { through: "Like", as: "Likers" }); //중간 테이블 이름: Like, 별칭:'Likers;
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followers",
      foreignKey: "FollowingId",
    }); //foreignKey:col의 값을 정해준다//나=FollowingId, 내가 따라다니는 사람목록=Followers
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followings",
      foreignKey: "FollowerId",
    }); //나=FollowerId
    db.User.belongsToMany(db.User, { through: "Ignore", as: "Ignorings" });
  }
};
