'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Log.belongsTo(models.Song, {
        foreignKey: "SongId"
      })
      Log.belongsTo(models.User, {
        foreignKey: "UserId"
      })
      // define association here
    }
  };
  Log.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    SongId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Log',
  });
  return Log;
};