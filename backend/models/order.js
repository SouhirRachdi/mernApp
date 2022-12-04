const mongoose=require("mongoose")
const orderDetailSchema=new mongoose.Schema({
    
  _product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
  price:{type:Number},
  quantity:{type:Number, required:true},
  amount:{type:Number},  
},{versionKey:false , _id:false});

module.exports=OrderDetail=mongoose.model("orderDetails",orderDetailSchema)