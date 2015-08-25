var express = require('express');
var router = express.Router();
var Puppy = require('../models/puppies');
var get = require('../logic/utility');

router.get('/puppies', function(req, res, next) {
  res.json(get.allGet());
});

router.get('/puppy/:id', function(req, res, next) {
  var response = get.singleGet(req.params.id);
  res.json(response);
});

router.post('/puppies', function(req, res, next) {
  var response = get.handlePost(req.body.puppyID, req.body.puppyName, req.body.puppyAge);
  res.json(response);
});

router.put('/puppy/:id', function(req, res, next) {
  var response = get.handlePut(req.params.id, req.body);
  res.json(response);
});

router.delete('/puppy/:id', function(req, res, next) {
  var response = get.handleDelete(req.params.id);
  res.json(response);
});

module.exports = router;
