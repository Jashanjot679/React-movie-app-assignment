import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MovieHeader extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.state = { redirect: null };
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleChange(event) {
    console.log(event);
    console.log(this.props.history);
    let value = event.target.value;
    if (value === "now_playing") {
      this.props.history.push("/");
    } else {
      this.props.history.push("/movie/" + value);
    }
  }
  handleChange2(event) {
    console.log(event);
    console.log(this.props.history);
    let value = event.target.value;
    if (value === "airing_today") {
      this.props.history.push("/");
    } else {
      this.props.history.push("/tv/" + value);
    }
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
