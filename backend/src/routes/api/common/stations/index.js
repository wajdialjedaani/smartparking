const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const responseHandler = require('@helpers/responseHandler');
const processFile = require('@middleware/processFile');
const getRoutes = require('./get'); // Import get routes
const parkingOptionsRoutes = require('./parkingOptions'); // Import parkingOptions routes


// Custom validation function to check if location object has all required properties
const validateLocation = (value) => {
  if (!value || typeof value !== 'object') {
    throw new Error('Location must be an object');
  }
  const requiredProperties = ['postalCode', 'countryCode', 'country', 'county', 'lat', 'lng', 'city', 'state', 'road'];
  for (const prop of requiredProperties) {
    if (!(prop in value)) {
      throw new Error(`Location object missing property: ${prop}`);
    }
  }
  return true;
};

router.post('/create',
  processFile.processSingleFileOptionalMiddleware,
  [
    check('name').isLength({ min: 5 }),
    check('capacity').isNumeric(),
    check('orgName').isLength({ min: 5 }),
    // Custom validation for location property
    check('location').custom(validateLocation)
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return responseHandler.handleErrorObject(res, 400, errors.array());
    }
    next();
  },
  require('./create')
);

router.get('/', getRoutes.get); // Handle GET request to '/'
router.use('/parkingoptions', parkingOptionsRoutes); // Delegate requests starting with '/parkingoptions' to the parkingOptions routes
router.get('/:id', getRoutes.getById); // Handle GET request to '/:id'


module.exports = router;
