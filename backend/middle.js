const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authorization = req.header('Authorization');
  if (!authorization) {
    return res.status(401).send({ error: 'No token provided' });
  }

  const token = authorization.replace('Bearer ', '');
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    return res.status(500).send({ error: 'Server authentication is not configured' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
