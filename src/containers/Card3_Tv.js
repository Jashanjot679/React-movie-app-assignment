import React, { Component } from "react";

class Card3_Tv extends Component {
  state = {
    searchdata: this.props.searchdata,
  };

  async componentDidMount() {}

  render() {
    const { searchdata } = this.state;
    const {
      popularity,
      overview,
      poster_path,
      original_name,
      release_date,
    } = searchdata;
    return (
      <div className="cardstyle">
        <div className="image">
          <img
            className="poster  "
            src={"https://image.tmdb.org/t/p/w220_and_h330_face/" + poster_path}
            alt={original_name}
          />
        </div>
        <div className="content">
          <h3 title={original_name}>{original_name}</h3>

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
export default Card3_Tv;
