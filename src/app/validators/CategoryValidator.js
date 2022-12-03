const { check } = require('express-validator');

class CategoryValidator {
  rules = [
    check('name')
      .notEmpty()
      .withMessage('Name is required')
      .escape()
      .trim(),
  ];
}

// Singleton
module.exports = new CategoryValidator();
