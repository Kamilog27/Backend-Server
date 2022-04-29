const mongoose=require('mongoose');
const { required } = require('nodemon/lib/config');
const Schema=mongoose.Schema;

const HeroeSchema=new Schema({
    nombre:{
        type:String,
        required:true
    },
    grupo:{
        type:String,
        required:true
    },
    ciudad:{
        type:String,
        required:true
    },
    condicion:{
        type:String,
        required:true
    },
    poder:{
        type:Array,
        required:true
    },
    vehiculo:{
        type:String
    },
    tipo_de_vehiculo:{
        type:String
    },
    img:{
        type:String
    }

});

module.exports=mongoose.model('Heroes',HeroeSchema);