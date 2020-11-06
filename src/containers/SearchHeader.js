import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MovieHeader from "./MovieHeader";
class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = { inputValue: '' };
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleChange(event) {
    // console.log(event);
    // console.log(this.props.history);

    let value = event.target.value;
    // if (value === "movie") {
    //   this.props.history.push("/");
    // } else {

    this.props.history.push("/search/" + value);
    console.log(this.props.history);
    // }
  }

  onChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <div className="searchArea">
        <input
            value={this.state.inputValue}
          type="text"
          name="searchh"
          placeholder="Search"
          onChange={this.onChange}
        />
        <label className="searchTypeLabel">Type</label>
        <select
          className="searchSelect"
          id="tv"
          value={this.props.select}
          // onChange={this.onChange}
          onChange={this.handleChange}
        >
          {/*<option value="../../">Search Type</option>*/}
          <option value="movie">Movie</option>
          <option value="multi">multi</option>
          <option value="tv">tv</option>
        </select>
        <button onClick={this.props.searchClicked}>SEARCH</button>
      </div>
    );
  }
}
export default withRouter(SearchHeader);
