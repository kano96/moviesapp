import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavorite } from "../../actions";
import "./Favorites.css";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {this.props.movies?.map((movie) => {
            return (
              <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                <button onClick={() => this.props.removeMovie(movie.id)}>
                  X
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    removeMovie: (id) => dispatch(removeMovieFavorite(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
