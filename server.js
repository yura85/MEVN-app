const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

// DB cofig
const db = require('./config/keys').mongoURI;

//conecting to mongodb
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

   const port = process.env.PORT || 5000

   app.listen(port, () => console.log(`server running on port ${port}`))
