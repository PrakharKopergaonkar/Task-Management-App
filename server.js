const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const app = express()
const config = require('config');
//body parser middleware
app.use(bodyParser.json())

const db = config.get('mongoURI')

//mongoose connectivity for localhost database
mongoose.connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
        }) //
        .then(() => console.log("mongodb connected"))
        .catch(err => console.log(err));

//use routes 
app.use('/api/items',  require('./routes/api/items'))
app.use('/api/users',  require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server started on port ${port}`))

