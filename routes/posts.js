const router = require('express').Router();
const verify = require('../Middleware/verifyToken');

router.get('/', verify, (req, res) => {
  res.json({ posts: { user: req.user, title: 'my first post', description: 'random data you shouldnt access' } });
})

module.exports = router;
