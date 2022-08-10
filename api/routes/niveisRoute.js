const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('/niveis', NivelController.findAll);
router.get('/niveis/:id', NivelController.findByID);
router.post('/niveis', NivelController.newNivel)
router.put('/niveis/:id', NivelController.updateNivel);
router.delete('/niveis/:id', NivelController.deleteByID)

module.exports = router