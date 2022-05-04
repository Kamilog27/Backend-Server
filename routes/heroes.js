const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { getHeroes, crearHeroes, actualizarHeroes,getHeroe} = require('../controllers/heroes');
const { validarCampos } = require('../middlewares/validarcampos');

router.get('/', getHeroes);
router.post('/',
    [check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('grupo', 'El grupo es obligatorio').not().isEmpty(),
    check('ciudad', 'La ciudad es obligatoria').not().isEmpty(),
    check('condicion', 'La condicion es obligatoria').not().isEmpty(),
    check('poder', 'El poder es obligatorio').not().isEmpty(),
    check('vehiculo', 'El vehiculo es obligatorio').not().isEmpty(),
    check('imagen', 'La imagen es obligatorio').not().isEmpty(),
        validarCampos
    ], crearHeroes);


module.exports = router;
