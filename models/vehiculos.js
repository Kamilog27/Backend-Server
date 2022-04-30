const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const VehiculosSchema=new Schema({
    nombre:{
        type:String        
    },
    tipo:{
       type:String       
    },
    heroes:{
        type:Schema.Types.ObjectId,
        ref:'Heroes',
        required:true
    }

},{collection:'vehiculos'});

module.exports=mongoose.model('vehiculo',VehiculosSchema);