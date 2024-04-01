const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  stringaddress: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
  countryCode: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  county: {
    type: String,
    required: false
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  road: {
    type: String,
    required: true
  }
});

const stationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: locationSchema,
    required: true
  },
  capacity: {
    type: String,
    required: false
  },
  orgName: {
    type: String,
    required: true
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  stationImg: {
    type: String,
    required: false
  }
}, { timestamps: true });

mongoose.model('Stations', stationSchema);
