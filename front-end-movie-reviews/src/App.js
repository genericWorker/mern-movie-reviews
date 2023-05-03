import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import MovieReviewList from "./components/moviereviews-list.component";
import EditMovieReview from "./components/edit-moviereview.component";
import CreateMovieReview from "./components/create-moviereview.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={MovieReviewList} />
      <Route path="/edit/:id" component={EditMovieReview} />
      <Route path="/create" component={CreateMovieReview} />
      </div>
    </Router>
  );
}

export default App;