const { Router } = require('express');
const router = Router();

const { getBuscarHeroes } = require('../controllers/busquedaHeroes');


router.get('/:buscar',getBuscarHeroes)

module.exports = router;