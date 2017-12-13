const express = require('express');
const router = express.Router();
const os = require('os')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Viseo Hong Kong Digital Innovation Labs', hostname: os.hostname, nonce: Math.random()});
});

module.exports = router;
