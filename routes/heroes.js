const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { getHeroes, crearHeroes, actualizarHeroes } = require('../controllers/heroes');
const { validarCampos } = require('../middlewares/validarcampos');

router.get('/', getHeroes);
router.post('/',
    [check('nombre').not().isEmpty(),
    check('grupo', 'El grupo es obligatorio').not().isEmpty(),
    check('ciudad', 'La ciudad es obligatoria').not().isEmpty(),
    check('condicion', 'La condicion es obligatoria').not().isEmpty(),
    check('poder', 'El poder es obligatorio').not().isEmpty(),
        validarCampos
    ], crearHeroes);
router.put('/:id',
    [check('nombre', 'El nombre es obligatorio'),
    check('ciudad', 'La ciudad es obligatoria'),
        validarCampos
    ], actualizarHeroes);
module.exports = router;
