const express = require('express');
const router = express.Router();

// Available API Routes.
router.use('/api/events', require('./events.js'));
router.use('/api/users', require('./auth.js'));
router.use('/api/register', require('./registerEvent.js'));

module.exports = router;