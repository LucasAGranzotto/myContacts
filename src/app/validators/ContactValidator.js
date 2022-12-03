const { check } = require('express-validator');

class ContactValidator {
  rules = [
    check('name')
      .notEmpty()
      .withMessage('Name is required')
      .escape()
      .trim(),

    check('email')
      .notEmpty()
      .withMessage('E-mail is required')
      .bail()
      .isEmail()
      .withMessage('E-mail is invalid')
      .normalizeEmail(),

    check('phone')
      .notEmpty()
      .withMessage('Phone is required')
      .bail()
      .isMobilePhone('pt-BR', { strictMode: true })
      .withMessage('Phone is invalid'),

    check('category_id')
      .notEmpty()
      .withMessage('Category is required')
      .bail()
      .isUUID()
      .withMessage('Category is invalid'),
  ];
}

// Singleton
module.exports = new ContactValidator();
