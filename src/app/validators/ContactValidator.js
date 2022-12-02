const { body } = require('express-validator');

class ContactValidator {
  rules = [
    body('name').notEmpty().withMessage('Name is required').escape()
      .trim(),

    body('email')
      .notEmpty()
      .withMessage('E-mail is required')
      .bail()
      .isEmail()
      .withMessage('E-mail is invalid')
      .normalizeEmail(),

    body('phone')
      .notEmpty()
      .withMessage('Phone is required')
      .bail()
      .isMobilePhone('pt-BR', { strictMode: true })
      .withMessage('Phone is invalid'),

    body('category_id')
      .notEmpty()
      .withMessage('Category is required')
      .bail()
      .isUUID()
      .withMessage('Category is invalid'),
  ];
}

// Singleton
module.exports = new ContactValidator();
