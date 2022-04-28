'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    get formattedCreatedDate() {
      return this.createdAt.toISOString().split('T')[0]
    }

    static associate(models) {
      Song.belongsTo(models.Artist, {
        foreignKey: "ArtistId"
      })
      Song.belongsTo(models.User, {
        foreignKey: "UserId"
      })
      Song.hasMany(models.Log, {
        foreignKey: "SongId"
      })
      Song.hasMany(models.Bookmark, {
        foreignKey: "SongId"
      })
    }
  };
  Song.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Title cannot be empty"
        },
        notNull: {
          msg: "Title is required"
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Description cannot be empty"
        },
        notNull: {
          msg: "Description is required"
        }
      }
    },
    ArtistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Artist cannot be empty"
        },
        notNull: {
          msg: "Artist Type is required"
        }
      }
    },
    UserId: DataTypes.INTEGER,
    songGenre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Song genre cannot be empty"
        },
        notNull: {
          msg: "Song genre is required"
        }
      }
    },
    status: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Song',
  });
  Song.beforeCreate((job) => {
    job.status = 'Active'
  })
  return Song;
};