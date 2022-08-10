const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.findAll);
router.get("/pessoas/:id", PessoaController.findByID);
router.post('/pessoas', PessoaController.newPessoa);
router.put("/pessoas/:id", PessoaController.updatePessoa);
router.delete("/pessoas/:id", PessoaController.deleteByID);

module.exports = router