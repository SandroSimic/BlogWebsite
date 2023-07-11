const User = require("./../Model/userModel")

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find()

    if (users.length < 1) {
      return res.status(404).json({
        message: "No users found",
      })
    }

    res.status(200).json({
      status: "Success",
      data: {
        users,
      },
    })
  } catch (error) {
    res.status(400).json({
      status: "Error",
      error: error.message,
    })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId

    const deletedUser = await User.findByIdAndDelete(userId)

    if(!deletedUser) {
        return res.status(404).json({
            message: "User with this id does not exist"
        })
    }

    res.status(200).json({
        message: 'User deleted'
    })


  } catch (error) {
    res.status(400).json({
      status: "Error",
      error: error.message,
    })
  }
}

exports.updateUser = (req,res) => {
  
  res.send(console.log('Updating user'))
}