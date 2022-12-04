const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    
    name: {type: String, required: [true, 'Please add a name'], },
    email: { type: String, required: [true, 'Please add an email'], unique: true, },
    password: {
        type: String,
        required: [true, 'Please add a password'],
      },
    nbrGifts:{type:Number},
    remiseDefaut:{type:Number },
   
},{timestamps:true})

module.exports=User=mongoose.model("user",userSchema)