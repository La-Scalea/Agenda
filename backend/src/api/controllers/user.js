const userService = require("../services/user");

module.exports = {
  async userAuthenticate(req, res) {
    const result = await userService.authenticateUser(req.body);
    return res.status(result.code).send(result.return);
  },
  async userReadAll(req, res) {
    const result = await userService.readAllUsers();
    return res.status(result.code).send(result.return);
  },
  async userReadById(req, res) {
    const result = await userService.readUserById(req.params);
    return res.status(result.code).send(result.return);
  },
  async userCreate(req, res) {
    const result = await userService.createUser(req.body);
    return res.status(result.code).send(result.return);
  },
  async userUpdate(req, res) {
    const result = await userService.updateUser(req.body, req.params);
    return res.status(result.code).send(result.return);
  },
  async userDelete(req, res) {
    const result = await userService.deleteUser(req.params);
    return res.status(result.code).send(result.return);
  },
};
