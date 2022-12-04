const express = require('express')
const router = express.Router()

const {AddToCart,GetCart}= require('../controllers/cartController')


router.post('/addtocart',  AddToCart)
router.get('/getcart',  GetCart)

module.exports = router