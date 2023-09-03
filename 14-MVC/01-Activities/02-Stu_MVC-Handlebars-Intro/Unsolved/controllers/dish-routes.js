// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
//Controller part of the framework

const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
//if a user hits the '/' then the res.render will execute
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method
  res.render('all');
});

module.exports = router;
