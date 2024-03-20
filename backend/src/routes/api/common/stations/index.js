const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const responseHandler = require('@helpers/responseHandler');
const processFile = require('@middleware/processFile');
router.post('/create',
  processFile.processSingleFileOptionalMiddleware,

  [
    check('name').isLength({ min: 5 }),
    check('location').isLength({ min: 5 }),
    check('capacity').isNumeric(),
    check('orgName').isLength({ min: 5 }),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return responseHandler.handleErrorObject(res, 401, errors.array());
    }
    next();
  },
  require('./create'));
router.get('/', require('./get'));
module.exports = router;