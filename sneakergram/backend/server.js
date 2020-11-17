const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const addYeezyRoutes = express.Router();
const PORT = 8080

let AddYeezy = require('./models/Yeezy/addYeezy.model');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/addYeezys', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("Yeezy database connection success");
})

  addYeezyRoutes.route('/').get(function(req, res) {
  AddYeezy.find(function(err, addYeezys) {
    if (err) {
       console.log(err);
      } else {
        res.json(addYeezys);
        }
    });
});

addYeezyRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  AddYeezy.findById(id, function(err, addYeezy) {
      res.json(addYeezy);
  });
});

addYeezyRoutes.route('/update/:id').post(function(req, res) {
  AddYeezy.findById(req.params.id, function(err, addYeezy) {
      if (!addYeezy)
          res.status(404).send("NO");
      else
      addYeezy.addYeezy_description = req.body.addYeezy_description;
      addYeezy.addYeezy_price = req.body.addYeezy_price;
      addYeezy.addYeezy_priority = req.body.addYeezy_priority;
      addYeezy.addYeezy_released = req.body.addYeezy_released;

      addYeezy.save().then(addYeezy => {
              res.json('AddYeezy updated!');
          })
          .catch(err => {
              res.status(400).send("Error");
          });
  });
});

addYeezyRoutes.route('/add').post(function(req, res) {
  let addYeezy= new AddYeezy(req.body);
  addYeezy.save()
      .then(addYeezy => {
          res.status(200).json({'addYeezy': 'Yeezy added!'});
      })
      .catch(err => {
          res.status(400).send('Could not add Yeezy');
      });
});

app.use('/addYeezys', addYeezyRoutes);


app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
