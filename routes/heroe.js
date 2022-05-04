const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { getHeroe,actualizarHeroes} = require('../controllers/heroes');
const { validarCampos } = require('../middlewares/validarcampos');

router.get('/:id',getHeroe);
router.put('/:id',
    [check('nombre', 'El nombre es obligatorio'),
    check('ciudad', 'La ciudad es obligatoria'),
        validarCampos
    ], actualizarHeroes);
module.exports=router;