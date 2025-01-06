const mongoose=require('mongoose')
const fabricSchema=require('./fabric.schema')
const lotSchema=mongoose.Schema({
    lotNumber:Number,
    partyName:String,
    febric:[fabricSchema]    
})


module.exports=lotSchema;