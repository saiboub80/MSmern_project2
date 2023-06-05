const express = require('express');
require('dotenv').config()
const cors = require('cors')
const app = express();
const { mongoose } = require('mongoose')
const {registerUser} = require('./controllers/userscontroller')

//const UserModel = require('./Models/users');
//database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database not Connected', err))
//middleware

app.use(cors());
app.use(express.json())
app.use('/', require('./routes/userRoutes'));



app.post('/', registerUser)

//app.listen(process.env.PORT)


const port = 8000;
app.listen(port,() => console.log(`Server is running on port ${port}`))
