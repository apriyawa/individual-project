'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Artist.hasMany(models.Song, {
        foreignKey: "ArtistId"
      })
    }
  };
  Artist.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name is required"
        },
        notEmpty: {
          msg: "Name cannot be empty"
        }
      }
    },
    artistLogo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Artist logo URL is required"
        },
        notEmpty: {
          msg: "Artist Logo URL cannot be empty"
        }
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Location is required"
        },
        notEmpty: {
          msg: "Location cannot be empty"
        }
      }
    },
    email: DataTypes.STRING,
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Description is required"
        },
        notEmpty: {
          msg: "Description cannot be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};