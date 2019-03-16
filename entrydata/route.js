const express = require('express');
const entryRoutes = express.Router();

// Require entry model in our routes module
let Entry = require('./schema');

// Defined store route
entryRoutes.route('/add').post(function (request, response) {
  let entry = new Entry(request.body);
  entry.save()
    .then(entry => {
      response.status(200).json({'entry': 'entry added successfully'});
    })
    .catch(error => {
    response.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
entryRoutes.route('/').get(function (request, response) {
    Entry.find(function(error, entries){
    if(error){
      console.log(error);
    }
    else {
      response.json(entries);
    }
  });
});

// Defined edit route
entryRoutes.route('/edit/:id').get(function (request, response) {
  let id = request.params.id;
  Entry.findById(id, function (error, entry){
      response.json(entry);
  });
});

//  Defined update route
entryRoutes.route('/update/:id').post(function (request, response) {
    Entry.findById(request.params.id, function(error, entry) {
    if (!entry)
      response.status(404).send("data is not found");
    else {
        entry.Date = request.body.Date;
        entry.Entry = request.body.Entry;

        entry.save().then(entry => {
          response.json('Update complete');
      })
      .catch(error => {
            response.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
entryRoutes.route('/delete/:id').get(function (request, response) {
    Entry.findByIdAndRemove({_id: request.params.id}, function(error, entry){
        if(error) response.json(error);
        else response.json('Successfully removed');
    });
});

module.exports = entryRoutes;