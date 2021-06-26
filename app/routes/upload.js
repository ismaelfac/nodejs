const express = require('express');
const uploadController = require('../controllers/upload');

const router = express.Router();

/**
 * 
 */
router.post(`/upload`, uploadController.upload, uploadController.uploadFile)

module.exports = router;