'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class T_chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.T_chat.belongsTo(models.T_room, {foreignKey: 'id'})
    }
  };
  T_chat.init({
    content: DataTypes.TEXT,
    ip: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'T_chat',
  });
  return T_chat;
};