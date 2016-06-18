var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({});
});

router.use('/agentes', require('./usuarioRouter'));
router.use('/autorizado', require('./autorizadoRouter'));
router.use('/imagem', require('./fotoRouter'));
router.use('/vistoria', require('./vistoriaRouter'));
router.use('/ordem', require('./ordemRouter'));
router.use('/cep', require('./cepRouter'));
router.use('/lacre', require('./lacreRouter'));

module.exports = router;
