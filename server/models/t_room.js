'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class T_room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.T_room.hasMany(models.T_chat, {foreignKey: "room_id"})
    }
  };
  T_room.init({
    roomName: DataTypes.STRING,
    ip: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'T_room',
  });
  return T_room;
};