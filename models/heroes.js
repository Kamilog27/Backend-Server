const mongoose=require('mongoose');
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
        type:String,
        required:true
    },
    imagen:{
        type:String,
        required:true
    }

});

module.exports=mongoose.model('Heroes',HeroeSchema);