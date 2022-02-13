const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  console.log('token validation');
  const autoken = req.headers.authorization;
  !autoken && res.status(403).json({ data: 'no token' });
  const token = autoken.split(' ')[1];

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) res.status(403).json('Token is not valid!');
    req.user = user;
  });

  next();
};

const verifyTokenAndAuthorization = (req, res, next) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    next();
  } else {
    res.status(403).json('Token is not valid!');
  }
};
const verifyAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(403).json('you are not admin');
  }
};
module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyAdmin,
};
