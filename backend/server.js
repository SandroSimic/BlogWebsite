const express = require('express')
const bodyParser = require('body-parser')
const blogRoutes = require('./Routes/blogRoutes')

const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
const connectDB = require('./utils/db')


// Connect to mongoDB
connectDB()


const app = express();

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended: true})
)

app.use('/blogs', blogRoutes)

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})