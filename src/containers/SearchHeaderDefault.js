import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MovieHeader from "./MovieHeader";
class SearchHeaderDefault extends Component {
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
    this.props.history.push("/search/" + value);
    console.log(this.props.history);
  }

  render() {
    return (
      <div className="searchArea">
        <select
          className="searchSelect"
          id="tv"
          value={this.props.select}
          onChange={this.handleChange}
        >
          <option value="../../">Search Type</option>
        </select>
      </div>
    );
  }
}
export default withRouter(SearchHeaderDefault);
