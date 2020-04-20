const validator = require("express-validator");

exports.validateJoin = [
  validator.check('user_st_name').isLength({ min: 5, max:60 }).trim(),
  validator.check('user_st_gender').isLength({ min: 1, max:1 }),
  validator.check('user_st_email').isEmail().normalizeEmail().trim(),
  validator.check('user_st_password').isLength({ min: 8 }),
  validator.check('user_dt_birth').toDate(),
  (req, res, next) => {
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      next();
    }
  },
];

exports.validateLogin = [
  validator.check("user_st_email").isEmail().normalizeEmail().trim(),
  validator
    .check("user_st_password")
    .isLength({ min: 8 })
    .withMessage("Invalid password"),
  (req, res, next) => {
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      next();
    }
  },
];
