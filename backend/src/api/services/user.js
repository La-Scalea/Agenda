"use strict";

const userRepository = require("../repositories/user");
const httpStatus = require("http-status-codes");
const Result = require("../classes/Result");

module.exports = {
  async authenticateUser(resBody) {
    let code, answer;
    try {
      const user = await userRepository.findByEmail(resBody.user_st_email);
      if (!user) {
        answer = "User not found";
        code = httpStatus.NOT_FOUND;
      } else {
        if (user.checkPassword(resBody.user_st_password)) {
          const token = await user.generateJWB();
          answer = { Name: user.user_st_name , "Access Token": token };
          code = httpStatus.OK;
        } else {
          answer = "Invalid credentials";
          code = httpStatus.NOT_FOUND;
        }
      }
    } catch (error) {
      answer = error.message;
    }
    let result = new Result(code, answer);
    return result.resultForResponse();
  },
  async readAllUsers() {
    let code, answer;
    try {
      answer = await userRepository.readAllUsers();
      code = httpStatus.OK;
    } catch (error) {
      answer = error.message;
    }
    let result = new Result(code, answer);
    return result.resultForResponse();
  },
  async readUserById(resParams) {
    let code, answer;
    try {
      answer = await userRepository.readUserById(resParams.id);
      if (answer) {
        code = httpStatus.OK;
      } else {
        answer = "User not found";
        code = httpStatus.NOT_FOUND;
      }
    } catch (error) {
      answer = error.message;
    }
    let result = new Result(code, answer);
    return result.resultForResponse();
  },
  async createUser(resBody) {
    let code, answer;
    try {
      answer = await userRepository.createUser({ ...resBody });
      code = httpStatus.OK;
    } catch (error) {
      answer = error.message;
    }
    let result = new Result(code, answer);
    return result.resultForResponse();
  },
  async updateUser(resBody, resParams) {
    let code, answer;
    try {
      const user = await userRepository.readUserById(resParams.id);
      if (user) {
        await userRepository.updateUser(resBody, resParams.id);
        code = httpStatus.OK;
      } else {
        answer = "User not found";
        code = httpStatus.NOT_FOUND;
      }
    } catch (error) {
      answer = error.message;
    }
    let result = new Result(code, answer);
    return result.resultForResponse();
  },
  async deleteUser(resParams) {
    let code, answer;
    try {
      const user = await userRepository.readUserById(resParams.id);
      if (user) {
        await userRepository.deleteUser(resParams.id);
        code = httpStatus.OK;
      } else {
        answer = "User not found";
        code = httpStatus.NOT_FOUND;
      }
    } catch (error) {
      answer = error.message;
    }
    let result = new Result(code, answer);
    return result.resultForResponse();
  },
};
