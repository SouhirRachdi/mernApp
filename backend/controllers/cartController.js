const Cart = require("../models/cartModel");
const Product = require("../models/productModel");



const populate={
    path:"cartDetails",
    populate:{
      path:"_product",
      model:"product",   
    }
}

const AddToCart=async(req,res)=>{
    //find if userCart already exists
    const userCart= await Cart.findOne({user:req._id}  ) 
    const product= await Product.findById(req.body._id)

    const cartDetails ={
        _product:req.body._id,
        price:product.price,
        quantity:req.body.quantity,
        amount:product.price*req.body.quantity
    }

  //if usercart already exists
  if(userCart){
    Cart.findOneAndUpdate({user:req._id,"cartDetails._product":req.body._id},
    {$inc:{
        "cartDetails.$.quantity":req.body.quantity,
        "cartDetails.$.amount":product.price*req.body.quantity
    }},{new:true}
    ).populate(populate)
    .exec()
    .then((data,error)=>{
        if(error) return res.json({status:false,error});
        if(data){
            return res.status(200).json({status:true,message:"add item to cart "});
        }else {
//puch item to cart
Cart.findOneAndUpdate({user:req._id,"cartDetails._product":req.body._id},
   {$push:{
    cartDetails:{...cartDetails}
       
   }
},{new:true}
).populate(populate)
.exec()
.then((data,error)=>{
    if(error) return res.json({status:false,error});
return res.status(200).json({status:true,message:"add item success ",data});
})
        }
    });
    //add new userCart 
  }else{
  const newCart=new Cart({user:req._id,cartDetails})
  newCart.save((error,data)=>{
    if(error) return res.json({status:false,error});
return res.status(201).json({status:true,message:"add item to cart successfly ",data});
  })
  }

};
const GetCart=async(req,res)=>{
    Cart.findOne({user:req._id}).populate(populate).exec((error,data)=>{
        if (error)  return res.json({status:false,error});
        return res.status(201).json({status:true,message:"get  usercart successfly ",data});
    })
}

module.exports = {AddToCart , GetCart}