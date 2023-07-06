const express = require('express')
const bodyParser = require('body-parser')
const blogRoutes = require('./Routes/blogRoutes')

const cors = require('cors')


const app = express();

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended: true}))


app.use('/', blogRoutes)



const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})