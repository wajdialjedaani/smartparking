const mongoose = require('mongoose');
const Stations = mongoose.model('Stations');
const ParkingOptions = mongoose.model('ParkingOptions');
const responseHandler = require('@helpers/responseHandler');
const get = async (req, res) => {
  try {
    const stations = await Stations.find();
    return responseHandler.handleSuccessObject(res, stations);
  } catch (error) {
    console.log('unknow error', error);
    return responseHandler.handleErrorResponse(res, 500, error.message);
  }
}
const getById = async (req, res) => {
  try {
    let data = {}
    const station = await Stations.findById(req.params.id);
    if (!station) {
      return responseHandler.handleErrorResponse(res, 404, 'Station not found');
    }
    const parkingOptions = await ParkingOptions.find({ stationId: station._id });
    console.log(parkingOptions);
    data = { ...station._doc }
    data.parkingOptions = parkingOptions || [];
    console.log(data)
    return responseHandler.handleSuccessObject(res, data);
  } catch (error) {
    console.log('unknow error', error);
    return responseHandler.handleErrorResponse(res, 500, error.message);
  }
}
exports.getById = getById;
exports.get = get;
