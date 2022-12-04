const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    
    text: { type: String,trim: true },
    prixTtc: { type: Number  },
    inStock: { type: Boolean, default: false },
    isGift: { type: Boolean, default: true },
  user: {
      type: mongoose.Schema.Types.ObjectId,

      ref: 'User',
    },

  },
  { timestamps: true }
);

module.exports=Product=mongoose.model("product",ProductSchema)