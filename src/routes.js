const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');

const ContactValidator = require('./app/validators/ContactValidator');

const validate = require('./app/util/validate');

const router = Router();

router.get('/contacts', ContactController.index);

router.get('/contacts/:id', (req, res) => {
  ContactController.show(req, res);
});

router.post('/contacts', ContactValidator.rules, (req, res) => {
  validate(req, res, () => {
    ContactController.store(req, res);
  });
});

router.put('/contacts/:id', ContactValidator.rules, (req, res) => {
  validate(req, res, () => {
    ContactController.update(req, res);
  });
});

router.delete('/contacts/:id', (req, res) => {
  ContactController.delete(req, res);
});

module.exports = router;
