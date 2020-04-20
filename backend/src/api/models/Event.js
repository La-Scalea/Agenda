"use strict";

module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define(
    "event",
    {
      even_in_identity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        validate: {
          notEmpty: true,
          isInt: true,
        },
      },
      even_st_title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: {
            args: [5, 150],
            msg:
              "ErrorModelevento: O título deve conter entre 5 a 150 caracteres.",
          },
        },
      },
      even_st_description: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          max: {
            args: 250,
            msg: "ErrorModelEvento: O máximo de caracteres permitido são 250.",
          },
        },
      },
      even_dt_beginning: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      even_dt_end: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
    },
    { timestamps: false, freezeTableName: true }
  );
  event.associate = function (models) {
    // associations can be defined here
    this.belongsTo(models.user, {
      foreignKey: "user_uu_identity",
    });
    this.hasMany(models.guest, {
      foreignKey: "even_in_identity",
      as: "guests"
    });
  };
  event.removeAttribute("id");
  return event;
};
