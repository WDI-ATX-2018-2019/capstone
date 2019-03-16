const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 4000
const cors = require('cors')
const mongoose = require('mongoose')
const db = 'mongodb://localhost:27017/journaltastic'
const entryRoute = require('./route')

mongoose.Promise = global.Promise
mongoose.connect(db, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    error => { console.log('Can not connect to the database' + error) }
)

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/entry', entryRoute)

app.listen(PORT, function(){
	console.log('Server is up and running on port:', PORT)
})