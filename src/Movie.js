import React, { Component } from "react";
import config from "./config";
import axios from "axios";

class Movie extends Component {
  constructor() {
    super();
    this.state = { movie: {} };
  }

  componentDidMount() {
    const mid = this.props.match.params.movieId;
    const singleMovieUrl = `https://api.themoviedb.org/3/movie/${mid}?api_key=${config.apiKey}`;
    axios.get(singleMovieUrl).then((resp) => {
      console.log(resp.data);
      this.setState({ movie: resp.data });
    });
  }
  render() {
    //console.log(this.props.match);
    if (this.state.movie.title === undefined) return <h5>Loading...</h5>;
    const movie = this.state.movie;
    const imageUrl = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
    return (
      <div className="row" onClick={() => window.history.back()}>
        <div className="col s12 m3">
          <div className="card">
            <div className="card-image">
              <img src={imageUrl} />
            </div>
            <div className="card-content">
              <span className="card-title">{movie.title}</span>
              <p>Budget: {movie.budget}</p>
              <p>Tagline: {movie.tagline}</p>
              <p>Overview: {movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Movie;
