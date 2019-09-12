const express =require('express');
const mongoose = require('mongoose');
const config = require('config');

const tasks = require('./routes/api/tasks');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');

const app = express();

//BodyParser Middleware
app.use(express.json());

// DB cofig
const db = config.get('mongoURI');

//conecting to mongodb
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// use routes
app.use('/api/tasks', tasks)
app.use('/api/users', users)
app.use('/api/auth', auth)

   const port = process.env.PORT || 5000

   app.listen(port, () => console.log(`server running on port ${port}`))
