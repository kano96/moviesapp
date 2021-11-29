import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.getMovieDetail(movieId);
  }

  render() {
    return (
      <div className="container">
        <div className="movie-card">
          Detalle de la pelicula
          <h2 className="title">{`Título: ${this.props.movie.Title}`}</h2>
          <img src={this.props.movie.Poster} alt="Img not found" />
          <h4>{`Año: ${this.props.movie.Year}`}</h4>
          <h4>{`Duración: ${this.props.movie.Runtime}`}</h4>
          <h4>{`Elenco: ${this.props.movie.Actors}`}</h4>
          <h4>{`Director: ${this.props.movie.Director}`}</h4>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movie: state.movieDetail,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
