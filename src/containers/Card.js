import React, { Component } from "react";

class Card extends Component {
  state = {
    moviedata: this.props.moviedata,
  };

  async componentDidMount() {}

  render() {
    const { moviedata } = this.state;
    const {
      popularity,
      overview,
      poster_path,
      original_title,
      release_date,
    } = moviedata;
    return (
      <div className="cardstyle">
        <div className="image">
          <img
            className="poster  "
            src={"https://image.tmdb.org/t/p/w220_and_h330_face/" + poster_path}
            alt={original_title}
          />
        </div>
        <div className="content">
            <h3  title={original_title}>
              {original_title}
            </h3>
          <div>
            <span>Release date: {release_date} | </span>
            <span>Popularity: {popularity}</span>
          </div>

          <p>{overview}</p>
        </div>
      </div>
    );
  }
}
export default Card;
