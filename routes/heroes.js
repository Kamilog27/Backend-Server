const {Router}=require('express');
const router=Router();
const {getHeroes,crearHeroes,actualizarHeroes}=require('../controllers/heroes');

router.get('/',getHeroes);
router.post('/',crearHeroes);
router.put('/:id',actualizarHeroes);
module.exports=router;
