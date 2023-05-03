import React, { Component } from 'react';
import axios from 'axios';

export default class EditMovieReview extends Component {
  constructor(props) {
    super(props);

    this.onChangeMovieName = this.onChangeMovieName.bind(this);
    this.onChangeMovieReview = this.onChangeMovieReview.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      moviename: '',
      moviereview: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/moviereviews/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          moviename: response.data.moviename,
          moviereview: response.data.moviereview
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
    }

  onChangeMovieReview(e) {
    this.setState({
      moviereview: e.target.value
    })
  }

  onChangeMovieName(e) {
    this.setState({
      moviename: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const moviereview = {
      moviename: this.state.moviename,
      moviereview: this.state.moviereview
    }
    console.log(moviereview);

    axios.post('http://localhost:5000/moviereviews/update/' + this.props.match.params.id, moviereview)
      .then(res => console.log(res.data));
    console.log('move to root')
    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Movie Review</h3>
      <form onSubmit={this.onSubmit}>
       
        <div className="form-group"> 
          <label>Movie Name: </label>
          <input  type="text" required
              className="form-control"
              value={this.state.moviename}
              onChange={this.onChangeMovieName}
              />
              </div>
        <div className="form-group"> 
        <label>Movie Review: </label>
          <input  type="text" required
              className="form-control"
              value={this.state.moviereview}
              onChange={this.onChangeMovieReview}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Edit Movie Review" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
