"use strict";
module.exports = (sequelize, DataTypes) => {
  const guest = sequelize.define(
    "guest",
    {
      gues_in_identity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        validate: {
          notEmpty: true,
          isInt: true
        }
      },
      gues_st_email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
          isLowercase: true,
          isEmail: true,
          notEmpty: true,
          max: {
            args: 60,
            msg:
              "ErrorModelGuest: O máximo de caracteres permitido são 60.",
          },
        },
      },
      gues_bl_confirmation: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        validate: {
          notEmpty: true,
        },
      },
    },
    { timestamps: false, freezeTableName: true }
  );
  guest.associate = function (models) {
    // associations can be defined here
    this.belongsTo(models.event, {
      foreignKey: "even_in_identity",
    });
  };
  guest.removeAttribute("id");
  return guest;
};
