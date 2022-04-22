"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Biodata, {
        foreignKey: {
          name: "UserId",
          type: DataTypes.INTEGER,
        },
      });
      User.hasMany(models.History, {
        foreignKey: {
          name: "UserId",
          type: DataTypes.INTEGER,
        },
      });
      models.Biodata.belongsTo(User, {
        foreignKey: {
          name: "UserId",
          type: DataTypes.INTEGER,
        },
      });
      models.History.belongsTo(User, {
        foreignKey: {
          name: "UserId",
          type: DataTypes.INTEGER,
        },
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
