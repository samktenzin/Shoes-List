const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose');
const AddYeezyRoutes = express.Router();

let AddYeezy = require('./GetYeezy.model');

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
    console.log("Yeezy database connection success");

  AddYeezyRoutes.route('/').get(function(req, res) {
  AddYeezy.find(function(err, AddYeezy) {
    if (err) {
       console.log(err);
      } else {
        res.json(AddYeezy);
        }
    });
});

AddYeezyRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  AddYeezy.findById(id, function(err, todo) {
      res.json(AddYeezy);
  });
});

AddYeezyRoutes.route('/update/:id').post(function(req, res) {
  AddYeezy.findById(req.params.id, function(err, AddYeezy) {
      if (!AddYeezy)
          res.status(404).send("data is not found");
      else
      AddYeezy.AddYeezy_description = req.body.AddYeezy_description;
      AddYeezy.AddYeezy_price = req.body.AddYeezy_img;
      AddYeezy.AddYeezy_priority = req.body.AddYeezy_priority;
      AddYeezy.AddYeezy_released = req.body.AddYeezy_released;

      AddYeezy.save().then(AddYeezy => {
              res.json('Todo updated!');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
  });
});

AddYeezyRoutes.route('/add').post(function(req, res) {
  let AddYeezy = new AddYeezy(req.body);
  AddYeezy.save()
      .then(AddYeezy => {
          res.status(200).json({'AddYeezy': 'Yeezy added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new Yeezy failed');
      });
});

app.use('/AddYeezy', AddYeezyRoutes);


app.listen(process.env.PORT || 8080);
