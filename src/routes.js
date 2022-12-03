const { Router } = require('express');

const router = Router();

const contactsRoutes = require('./app/routes/Contacts');
const categoriesRoutes = require('./app/routes/Categories');

router.use(contactsRoutes);
router.use(categoriesRoutes);

module.exports = router;
