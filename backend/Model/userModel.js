const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [6, "Password is too short (min 6 letters)"],
    select: false,
    validate: [
      {
        validator: function (password) {
          return /\d/.test(password)
        },
        message: "Password must contain at least one number",
      },
      {
        validator: function (password) {
          return /[A-Z]/.test(password)
        },
        message: "Password must contain at least one uppercase letter",
      },
    ],
  },
})

userSchema.pre('save', async function() {
  if(!this.isModified('password')) return
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.createJWT = function() {
  return jwt.sign({userId: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
}


module.exports = mongoose.model("User", userSchema)
