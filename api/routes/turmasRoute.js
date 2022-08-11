const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router.get('/turmas', TurmaController.findAll);
router.get('/turmas/:id', TurmaController.findByID);
router.post('/turmas', TurmaController.newTurma)
router.put('/turmas/:id', TurmaController.updateTurma);
router.delete('/turmas/:id', TurmaController.deleteByID)

module.exports = router