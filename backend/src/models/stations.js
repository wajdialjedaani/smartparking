const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
  },
  capacity: {
    type: String,
    required: false,
  },
  orgName: {
    type: String,
    required: true
  },
  owenerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  stationImg: { type: String, require: false },
}, { timestamps: true });
mongoose.model('Stations', stationSchema);