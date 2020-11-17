const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const AddYeezyRoutes = express.Router();
const PORT = 8080

let AddYeezy = require('./models/Yeezy/AddYeezy.model');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/AddYeezy', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("Yeezy database connection success");
})

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
  AddYeezy.findById(id, function(err, AddYeezy) {
      res.json(AddYeezy);
  });
});

AddYeezyRoutes.route('/update/:id').post(function(req, res) {
  AddYeezy.findById(req.params.id, function(err, AddYeezy) {
      if (!AddYeezy)
          res.status(404).send("NO");
      else
      AddYeezy.AddYeezy_description = req.body.AddYeezy_description;
      AddYeezy.AddYeezy_price = req.body.AddYeezy_price;
      AddYeezy.AddYeezy_priority = req.body.AddYeezy_priority;
      AddYeezy.AddYeezy_released = req.body.AddYeezy_released;

      AddYeezy.save().then(AddYeezy => {
              res.json('AddYeezy updated!');
          })
          .catch(err => {
              res.status(400).send("Error");
          });
  });
});

AddYeezyRoutes.route('/add').post(function(req, res) {
  let AddYeezy = new AddYeezy(req.body);
  AddYeezy.save()
      .then(AddYeezy => {
          res.status(200).json({'AddYeezy': 'Yeezy added!'});
      })
      .catch(err => {
          res.status(400).send('Could not add Yeezy');
      });
});

app.use('/AddYeezy', AddYeezyRoutes);


app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
