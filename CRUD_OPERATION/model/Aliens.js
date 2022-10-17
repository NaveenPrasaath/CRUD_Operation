const mongoose=require('mongoose')


const alienschema =new mongoose.Schema({
    
    name :{
        type:String,
        required: true
    },
    info:{
        type :String,
        required:true
    },
    active:{
        type:Boolean,
        required:true,
        default:false

    }, 
})
module.exports=mongoose.model('Alien',alienschema)