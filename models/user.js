"use strict";

const { Model, DataTypes } = require("sequelize");

class User extends Model {}

module.exports = (sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        field: "first_name",
      },
      lastName: {
        type: DataTypes.STRING,
        field: "last_name",
      },
      email: {
        type: DataTypes.STRING,
      },
      telephone: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.STRING,
        field: "created_at",
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.STRING,
        field: "updated_at",
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      tableName: "users",
    }
  );

  return User;
};
