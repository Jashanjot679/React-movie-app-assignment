import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MovieHeader extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = { redirect: null };
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleChange(event) {
    let value = event.target.value;
    this.props.history.push("/movie/" + value);
  }

  render() {
    return (
      <div className="theHeader">
        <label className="TypeLabel">Type</label>
        <select
          className="movieSelect"
          id="movie"
          value={this.props.select}
          onChange={this.handleChange}
        >
          <option value="now_playing">now playing</option>
          <option value="popular">popular</option>
          <option value="top_rated">top rated</option>
          <option value="upcoming">upcoming</option>
        </select>
      </div>
    );
  }
}
export default withRouter(MovieHeader);
