const mongoose = require('mongoose');
const Stations = mongoose.model('Stations');
const responseHandler = require('@helpers/responseHandler');
const { storeImage } = require('@helpers/utils')

const create = async (req, res) => {
  try {
    const { name, location, description, orgName, capacity } = req.body;
    const stationObj = {
      name,
      location,
      description,
      orgName,
      capacity
    }
    if (req.file) {
      const imageURL = await storeImage('uploads/stations/', req.file)
      stationObj['stationImg'] = imageURL
    }
    const station = new Stations(stationObj);

    await station.save();
    return responseHandler.handleSuccessResponse(res, 'Station created successfully');
  } catch (error) {
    console.log('unknow error', error);
    return responseHandler.handleErrorResponse(res, 500, error.message);
  }
};
module.exports = create;