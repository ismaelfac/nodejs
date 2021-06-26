const express = require('express');
const UserController = require('../controllers/user');
const router = express.Router();

const path = 'user';

router.get(
    `/${path}`,
    UserController.getData
);

router.post(
    `/${path}`,
    UserController.insertData
);

router.put(
    `/:id`,
    UserController.updatedSingle
);

router.delete(
    `/:id`,
    UserController.delectedSingle
);

module.exports = router;