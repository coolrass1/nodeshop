const express = require('express');
const app = express();
const Task = require('./Routes/Task');
const Product = require('./Routes/Product');
const User = require('./Routes/User');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
//const Bootcamproute = require('./route/Bootcamp');
//const erroHandler = require('./uils/errorHandler');
dotenv.config({ path: './config/config.env' });
//zbrxCiXZz3W7QT08
//mongodb+srv://iscarach:<password>@cluster0.vgtpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_LOCAL, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  });
};
connectDB();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static('public'));
app.get('/', (req, res) => {
  res.send('ok');
});

app.use('/Task', Task);
app.use('/User', User);
app.use('/Product', Product);

app.listen('5000', () => {
  console.log('connected at 5000');
});
