const User = require("../models/userModel");
const bcrypt = require('bcryptjs')

// desc    Addition new user
// route   POST /api/users

const AddUser = async (req, res) => {
  const { name, email, password,nbrGifts,remiseDefaut } = req.body


  // Check if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

    // Hashing password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    name,
    email,
    password:hashedPassword,
    nbrGifts,
    remiseDefaut
  })
  
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      nbrGifts:user.nbrGifts,
      remiseDefaut:user.remiseDefaut
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
}


module.exports = {AddUser}
  
  

