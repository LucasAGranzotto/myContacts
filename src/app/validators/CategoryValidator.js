const { body } = require('express-validator');

class CategoryValidator {
  rules = [body('name').notEmpty().withMessage('Name is required').escape()
    .trim()];
}

// Singleton
module.exports = new CategoryValidator();
