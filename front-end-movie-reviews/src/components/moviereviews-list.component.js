import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MovieReview = props => (
  <tr>
    <td>{props.moviereview.moviename}</td>
    <td>{props.moviereview.moviereview}</td>
    <td>
      <Link to={"/edit/"+props.moviereview._id}>edit</Link> | <a href="#" onClick={() => { props.deleteMovieReview(props.moviereview._id) }}>delete   </a>
    </td>
  </tr>
)

export default class MovieReviewsList extends Component {
  constructor(props) {
    super(props);

    this.deleteMovieReview = this.deleteMovieReview.bind(this)

    this.state = {moviereviews: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/moviereviews/')
      .then(response => {
        this.setState({ moviereviews: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteMovieReview(id) {
    axios.delete('http://localhost:5000/moviereviews/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      moviereviews: this.state.moviereviews.filter(el => el._id !== id)
    })
  }

  moviereviewsList() {
    return this.state.moviereviews.map(currentmoviereview => {
      return <MovieReview moviereview={currentmoviereview} deleteMovieReview={this.deleteMovieReview} key={currentmoviereview._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Movie</h3>
        <table className="table" >
          <thead className="thead-light">
            <tr>
              <th>Movie Name</th>
              <th>Movie Review</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.moviereviewsList() }
          </tbody>
        </table>
      </div>
    )
  }
}