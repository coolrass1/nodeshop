const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.Register = async (req, res) => {
  try {
    const signeduser = await User.findOne({ username: req.body.username });
    signeduser && res.status(405).json({ data: 'user already exit' });
    const hashedpassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({ ...req.body, password: hashedpassword });
    const token = generateAccessToken(user);
    res.status(200).json({ data: user, token });
  } catch (error) {
    console.log(error);
  }
};
function generateAccessToken(user) {
  return jwt.sign({ data: user }, process.env.TOKEN_SECRET, {
    expiresIn: '1800s',
  });
}

exports.SignIn = async (req, res) => {
  try {
    const signeduser = await User.findOne({ username: req.body.username });
    const result = await bcrypt.compare(req.body.password, signeduser.password);
    const token = generateAccessToken(signeduser);

    result
      ? res.status(200).json({ data: signeduser, token })
      : res.status(200).json({ data: 'incorect' });
  } catch (error) {
    res.status(200).json({ data: 'not signed' });
  }
};
