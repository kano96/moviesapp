import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovies, addMovieFavorite } from "../../actions";

import "./Buscador.css";
import MovieCard from "./MovieCard";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div className="searchCont">
        <h1>Movie Searcher</h1>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
              placeholder="Amazing movie..."
            />
          </div>
          <button type="submit">Search</button>
        </form>
        <div className="moviesSection">
          {this.props.movies ? (
            this.props.movies.map((movie) => {
              return (
                <MovieCard
                  id={movie.imdbID}
                  key={movie.imdbID}
                  title={movie.Title}
                  poster={movie.Poster}
                  year={movie.Year}
                ></MovieCard>
              );
            })
          ) : (
            <p>No se han encontrado resultados</p>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
