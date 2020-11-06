import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class TvHeader extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { redirect: null };
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleChange(event) {
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
        {/* <MovieHeader /> */}
        <label className="TypeLabel">Type</label>
        <select
          id="tv"
          className="tvSelect"
          value={this.props.select}
          onChange={this.handleChange}
        >
          <option value="../">Tv shows</option>
          <option value="airing_today">airing today</option>
          <option value="on_the_air">on the air</option>
          <option value="popular">popular</option>
          <option value="top_rated">top rated</option>
        </select>
      </div>
    );
  }
}
export default withRouter(TvHeader);
