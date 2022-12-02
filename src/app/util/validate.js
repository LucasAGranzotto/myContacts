const { validationResult } = require('express-validator');
const { StatusCodes } = require('http-status-codes');

function validate(req, res, cb) {
  try {
    validationResult(req).throw();
    cb(req, res);
  } catch (err) {
    const { errors } = validationResult(req);
    return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }
}

module.exports = validate;
