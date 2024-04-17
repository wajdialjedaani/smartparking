const mongoose = require('mongoose');
const Stations = mongoose.model('Stations');
const Feedback = mongoose.model('Feedback');
const responseHandler = require('@helpers/responseHandler');
const create = async (req, res) => {
  try {
    const { email, stationId, rating, comments } = req.body;
    console.log("rrrr===", req.body)
    if (!email || !stationId || !rating) {
      return responseHandler.handleErrorResponse(res, 400, 'Missing required fields');
    }

    const feedback = new Feedback({
      email,
      stationId,
      rating,
      comments
    });
    const savedFeedback = await feedback.save();
    return responseHandler.handleSuccessResponse(res, 200, 'Feedback submitted successfully');
  } catch (error) {
    console.log('unknow error', error);
    return responseHandler.handleErrorResponse(res, 500, error.message);
  }
}
module.exports = create;