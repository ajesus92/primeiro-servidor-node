const express = require('express'),
    router = express.Router(),
    controllerProdutos = require ('../controllers/controllerProdutos')

router.get('/:id/:cor?', controllerProdutos.getById)

module.exports = router