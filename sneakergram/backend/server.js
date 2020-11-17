const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose');
// const { default: GetYeezy } = require('../src/Components/GetYeezy/GetYeezy');
const GetYeezyRoutes = express.Router();

let GetYeezy = require('./GetYeezy.model');

require('dotenv').config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));


app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose.connect('mongodb://127.0.0.1:27017/GetYeezy', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");

    GetYeezyRoutes.route('/').get(function(req, res) {
  GetYeezy.find(function(err, GetYeezy) {
    if (err) {
       console.log(err);
      } else {
        res.json(GetYeezy);
        }
    });
});

GetYeezyRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  GetYeezy.findById(id, function(err, todo) {
      res.json(GetYeezy);
  });
});

GetYeezyRoutes.route('/update/:id').post(function(req, res) {
  GetYeezy.findById(req.params.id, function(err, GetYeezy) {
      if (!GetYeezy)
          res.status(404).send("data is not found");
      else
          GetYeezy.GetYeezy_description = req.body.GetYeezy_description;
          GetYeezy.GetYeezy_img = req.body.GetYeezy_img;
          GetYeezy.GetYeezy_priority = req.body.GetYeezy_priority;
          GetYeezy.GetYeezy_released = req.body.GetYeezy_released;

          GetYeezy.save().then(GetYeezy => {
              res.json('Todo updated!');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
  });
});

GetYeezyRoutes.route('/add').post(function(req, res) {
  let GetYeezy = new GetYeezy(req.body);
  GetYeezy.save()
      .then(GetYeezy => {
          res.status(200).json({'GetYeezy': 'GetYeezy added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new GetYeezy failed');
      });
});

app.use('/GetYeezy', GetYeezyRoutes);


app.listen(process.env.PORT || 8080);
