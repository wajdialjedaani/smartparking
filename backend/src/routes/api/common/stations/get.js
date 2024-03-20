const mongoose = require('mongoose');
const Stations = mongoose.model('Stations');
const responseHandler = require('@helpers/responseHandler');
const get = async (req, res) => {
  try {
    const stations = await Stations.find();
    return responseHandler.handleSuccessResponse(res, stations);
  } catch (error) {
    console.log('unknow error', error);
    return responseHandler.handleErrorResponse(res, 500, error.message);
  }
}
module.exports = get;
