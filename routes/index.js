var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'F/CCU/GOP' });
});

router.use('/usuarios', require('./usuarioRouter'));

module.exports = router;
