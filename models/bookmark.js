'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bookmark.belongsTo(models.User, {
        foreignKey: "UserId"
      })
      Bookmark.belongsTo(models.Song, {
        foreignKey: "SongId"
      })
      // define association here
    }
  };
  Bookmark.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SongId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};