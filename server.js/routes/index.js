const express = require('express');
const router = express.Router();

// Available API Routes.
router.use('/api/events', require('./events.js'));

module.exports = router;