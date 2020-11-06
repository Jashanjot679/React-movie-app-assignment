import React, { Component } from "react";

class Card2 extends Component {
  state = {
    tvdata: this.props.tvdata,
  };

  async componentDidMount() {}

  render() {
    const { tvdata } = this.state;
    const {
      popularity,
      overview,
      poster_path,
      original_name,
      first_air_date,
    } = tvdata;
    return (
      <div className="cardstyle">
        <div className="image">
          <img
            className="poster"
            src={"https://image.tmdb.org/t/p/w220_and_h330_face/" + poster_path}
            alt={original_name}
          />
        </div>
        <div className="content">

            <h3  title={original_name}>
              {original_name}
            </h3>


          <div>
            <span>Release date: {first_air_date} | </span>
            <span>Popularity: {popularity}</span>
          </div>

          <p>{overview}</p>
        </div>
      </div>
    );
  }
}
export default Card2;
