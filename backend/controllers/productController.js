const Product = require("../models/productModel");


// @desc    Addition new Product
// @route   POST /api/prpducts
const AddProduct=async(req,res)=>{
  

    try {
        const newProduct = new Product({...req.body});
        await newProduct.save();
        res.send({ product: newProduct, message: "product succesffuly" });
      } catch (err) {
        res.status(400).send(err.message);
      }
    }
module.exports = {AddProduct}
