const DataTypes = require('sequelize');
const { Model } = DataTypes;
module.exports = class Report extends Model {
    static init(sequelize) {
        return super.init({
            reason: {
                type: DataTypes.STRING(300),
                allowNull: false,//필수값으로 설정
            },
        },
            {
                modelName: 'Report',
                tableName: 'reports',
                charset: 'utf8',
                collate: 'utf8_general_ci',
                sequelize,
            });
    }
    static associate(db) {
        db.Report.belongsTo(db.User);//report안에 신고자 id(user)가 들어있어야 한다
        db.Report.belongsTo(db.Post);
    }
};