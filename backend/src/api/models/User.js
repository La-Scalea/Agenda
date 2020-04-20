"use strict";

require("dotenv").config();
const crypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      user_uu_identity: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        validate: {
          notEmpty: true,
        },
      },
      user_st_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: {
            args: [3, 60],
            msg:
              "ErrorModelUsuario: O nome deve conter entre 5 a 150 caracteres.",
          },
        },
      },
      user_st_gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [["M", "F"]],
          len: {
            args: [0, 1],
            msg: "ErrorModelUsuario: Valor esperado é M ou F.",
          },
        },
      },
      user_st_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isLowercase: true,
          isEmail: true,
          notEmpty: true,
          max: {
            args: 60,
            msg: "ErrorModelUsuario: O máximo de caracteres permitido são 60.",
          },
        },
      },
      user_st_password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      user_dt_birth: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      user_bl_state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        validate: {
          notEmpty: true,
        },
      },
    },
    { timestamps: false, freezeTableName: true }
  );
  user.removeAttribute("id");
  user.associate = function (models) {
    // associations can be defined here
    this.hasMany(models.event, {
      foreignKey: "user_uu_identity",
      as: "events",
    });
  };
  user.beforeSave(function (user) {
    const salt = crypt.genSaltSync(parseInt(process.env.BCRYPT_SALT_ROUNDS));
    user.set("user_st_password", crypt.hashSync(user.user_st_password, salt));
  });
  user.prototype.checkPassword = function (loginPassword) {
    const authorizationStatus = crypt.compareSync(
      loginPassword,
      this.user_st_password
    );
    return authorizationStatus;
  };
  user.prototype.generateJWB = function () {
    const tokenUser = jwt.sign(
      { id: this.user_uu_identity, name: this.user_st_name },
      process.env.SECRET,
      { expiresIn: 86400 }
    );
    return tokenUser;
  };
  return user;
};
