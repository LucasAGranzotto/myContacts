const { Router } = require('express');

const CategoryController = require('../../controllers/CategoryController');

const CategoryValidator = require('../../validators/CategoryValidator');

const validate = require('../../utils/validate');

const router = Router();

router.get('/categories', CategoryController.index);

router.get('/categories/:id', (req, res) => {
  CategoryController.show(req, res);
});

router.post('/categories', CategoryValidator.rules, (req, res) => {
  validate(req, res, () => {
    CategoryController.store(req, res);
  });
});

router.put('/categories/:id', CategoryValidator.rules, (req, res) => {
  validate(req, res, () => {
    CategoryController.update(req, res);
  });
});

router.delete('/categories/:id', (req, res) => {
  CategoryController.delete(req, res);
});

module.exports = router;
