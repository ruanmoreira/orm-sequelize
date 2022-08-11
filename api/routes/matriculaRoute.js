const { Router } = require('express')
const MatriculaController = require('../controllers/MatriculaController')

const router = Router()

router.get('/matriculas', MatriculaController.findAll);
router.get('/matriculas/:id', MatriculaController.findByID);
router.post('/matriculas', MatriculaController.newMatricula)
router.put('/matriculas/:id', MatriculaController.updateMatricula);
router.delete('/matriculas/:id', MatriculaController.deleteByID)

module.exports = router