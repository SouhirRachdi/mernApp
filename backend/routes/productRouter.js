const express = require('express')
const router = express.Router()

const {AddProduct}= require('../controllers/productController')


router.post('/addproduct',  AddProduct)


module.exports = router