import React, { Component } from 'react';
import axios from 'axios';

export default class CreateMovieReview extends Component {
  constructor(props) {
    super(props);

   this.onChangeMovieName = this.onChangeMovieName.bind(this);
   this.onChangeMovieReview = this.onChangeMovieReview.bind(this);
   this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      moviename: '',
      moviereview: ''
    }
  }

  onChangeMovieName(e) {
    this.setState({
      moviename: e.target.value
    })
  }

  onChangeMovieReview(e) {
    this.setState({
      moviereview: e.target.value
    })
  }
  
  onSubmit(e) {
    e.preventDefault();

    const moviereview = {
      moviename: this.state.moviename,
      moviereview: this.state.moviereview
    }

    console.log(moviereview);

    axios.post('http://localhost:5000/moviereviews/add', moviereview)
      .then(res => console.log(res.data));

      window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Movie Review</h3>
      <form onSubmit={this.onSubmit}>
     
        <div className="form-group"> 
          <label>Movie Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.moviename}
              onChange={this.onChangeMovieName}
              />
        </div>
        <div className="form-group"> 
          <label>Movie Review: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.moviereview}
              onChange={this.onChangeMovieReview}
              />
        </div>
        
        <div className="form-group">
          <input type="submit" value="Create Movie Review" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}