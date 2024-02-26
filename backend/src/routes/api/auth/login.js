const mongoose = require('mongoose');
const Users = mongoose.model('Users');
const responseHandler = require('@helpers/responseHandler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// const User=
const login = async (req, res) => {
  const { email, password } = req.body;
  console.log('email', email)
  const user = await Users.findOne({ email: email })

  console.log('user', user)
  if (!user) {
    return responseHandler.handleErrorResponse(res, 400, 'Email or password is wrong')
  }
  // Check if password is correct
  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) {
    return responseHandler.handleErrorResponse(res, 400, 'Email or password is wrong')
  }
  // Create and assign a token
  const User = {
    firstName: user.firstName,
    lastName: user.lastName,
    stationId: user.stationId,
    email: user.email,
    _id: user._id,
  }
  const token = jwt.sign({ user: User }, process.env.JWT_SECRET, { expiresIn: '24h' }, { algorithm: 'HS256' });
  User['token'] = token
  User['profileImage'] = user.profileImg ? hostURL + user.profileImg : ""
  return responseHandler.handleSuccessObject(res, User)
}
module.exports = login;