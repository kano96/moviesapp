import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MovieCard extends Component {
  render() {
    return (
      <div className="MovieCard">
        <img src={this.props.poster} alt="" />
        <Link to={`/movie/${this.props.id}`}>{this.props.title}</Link>
        <p>{this.props.year}</p>
        <button
          onClick={() =>
            this.props.addMovieFavorite({
              title: this.props.title,
              id: this.props.id,
            })
          }
        >
          Fav
        </button>
      </div>
    );
  }
}

export default MovieCard;
