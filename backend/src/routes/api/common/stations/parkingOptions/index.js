const router = require('express').Router();
router.post('/create', require('./create.js'))
router.get('/', require('./get'))
module.exports = router;