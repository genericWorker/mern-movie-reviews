const router = require('express').Router(); 
const MovieReview = require('../models/moviereview.model');

router.route('/').get((req,res) => { 
    MovieReview.find()
    .then(moviereviews=> res.json(moviereviews))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

router.route('/:id').get((req,res) => {
  MovieReview.findById(req.params.id)
    .then(moviereview => res.json(moviereview))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

router.route('/add').post((req,res) => {
     const moviename = req.body.moviename;
     const moviereview = req.body.moviereview;
     const newMovieReview = new MovieReview({
       moviename, 
       moviereview,
    }); 
    newMovieReview.save()
    .then(() => res.json('Movie Review added!'))
    .catch(err => res.status(400).json('Error: ' + err)); 
  }); 

  router.route('/:id').delete((req,res) => {
    MovieReview.findByIdAndDelete(req.params.id)
    .then(moviereview => res.json("Movie Review deleted."))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

  router.route('/update/:id').post((req,res) => {
    MovieReview.findById(req.params.id)
    .then(moviereview => {
        moviereview.moviename = req.body.moviename;
        moviereview.moviereview = req.body.moviereview;
        moviereview.save()
        .then(() => res.json('Movie Review updated!'))
        .catch(err => res.status(400).json('Error: ' + err));  
    })
    .catch(err => res.status(400).json('Error: ' + err)); 
  });   


  module.exports = router; 
    
