const express = require("express")
const bodyParser = require("body-parser")
const blogRoutes = require("./Routes/blogRoutes")
const userRoutes = require("./Routes/userRoutes")
const morgan = require('morgan')

const dotenv = require("dotenv")
dotenv.config()

const cors = require("cors")
const connectDB = require("./utils/db")

// Connect to mongoDB
connectDB()

const app = express()

app.use(morgan('dev'))

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use("/blogs", blogRoutes)
app.use("/users", userRoutes)

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
