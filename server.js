const express = require('express');
const app = express();

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

const UserRoute = require('./routes/user')

app.use(express.urlencoded({ extended: true }))

app.use(express.json())
app.use('/user',UserRoute)

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

