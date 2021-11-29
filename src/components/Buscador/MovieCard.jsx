import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { connect } from "react-redux";
import { getMovies, addMovieFavorite } from "../../actions";
import "./MovieCard.css";

export class MovieCard extends Component {
  render() {
    return (
      <div className="MovieCard">
        <Link to={`/movie/${this.props.id}`} style={{ width: "100%" }}>
          <img src={this.props.poster} alt="" />
        </Link>
        <div className="moviedetails">
          <Link
            to={`/movie/${this.props.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="movieTitle">{this.props.title}</div>
          </Link>
          <p>{this.props.year}</p>
        </div>

        <FaRegHeart
          className={
            this.props.moviesFavourites.find(
              (movie) => movie.id === this.props.id
            ) !== undefined
              ? "favourite"
              : "fa-light"
          }
          onClick={() =>
            this.props.addMovieFavorite({
              title: this.props.title,
              id: this.props.id,
            })
          }
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    moviesFavourites: state.moviesFavourites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
