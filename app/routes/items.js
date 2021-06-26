const express = require('express');
const ItemsController = require('../controllers/items');
const router = express.Router();

const path = 'items';

router.get(
    `/${path}`,
    ItemsController.getData
);

module.exports = router;