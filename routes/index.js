var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'F/CCU/GOP' });
});

router.use('/agentes', require('./usuarioRouter'));
router.use('/autorizado', require('./autorizadoRouter'));
router.use('/imagem', require('./fotoRouter'));
router.use('/vistoria', require('./vistoriaRouter'));
router.use('/ordem', require('./ordemRouter'));
router.use('/cadastro', require('./inscritosRouter'));
router.use('/numero', require('./numeroRouter'));
router.use('/foto', require('./fotoInscritoRouter'));

module.exports = router;
