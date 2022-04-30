const {Router}=require('express');
const router=Router();
const {getVehiculos,crearVehiculos}=require('../controllers/vehiculos');

router.get('/',getVehiculos);
router.post('/',crearVehiculos);
module.exports=router;