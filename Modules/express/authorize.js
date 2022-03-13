const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'gaby') {
    req.user = { name: 'gaby', id: 3 };
    next()
  } else {
    res.status(401).json([{ status: "unauthorized" }]);
  }

  next();
};

module.exports = authorize;