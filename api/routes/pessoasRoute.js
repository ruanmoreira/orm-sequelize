const { Router } = require('express')
const { findAll } = require('../controllers/PessoaController')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.findAll);

module.exports = router