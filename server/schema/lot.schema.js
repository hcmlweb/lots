const mongoose=require('mongoose')

const lotSchema=mongoose.Schema({
    lotNumber:Number,
    partyName:String,
    febric:[{
        fabricAmount:Number
}]    
})


module.exports=lotSchema;