const User = require("../Model/userModel")
const { StatusCodes } = require("http-status-codes")
const catchAsync = require("../utils/catchAsync")
const { BadRequestError, UnAuthenticatedError } = require("../errors/index.js")



exports.register = catchAsync(async (req, res, next) => {
  const { username, email, password, role } = req.body

  if (!username || !email || !password ) {
    throw new BadRequestError("please provide all values")
  }

  const userAlreadyExists = await User.findOne({ username })

  if (userAlreadyExists) {
    throw new BadRequestError("Username already in use")
  }

  const user = await User.create({ username, email, password, role })
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({
    user: {
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role
    },
    token,
  })
})

exports.login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError("Please provide all values")
  }
  const user = await User.findOne({ email }).select("+password")

  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials")
  }
  console.log(user)

  const isPasswordCorrect = await user.comparePassword(password)

  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Credentials")
  }

  const token = user.createJWT()

  res.status(StatusCodes.OK).json({ user, token })
}
