import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchHeader extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.doASearch = this.doASearch.bind(this);
    this.getQuery = this.getQuery.bind(this);

    this.state = {
      searchQuery: "",
      loading: true,
      searchType: "movie",
    };
  }

  async componentDidMount() {
    let getQuery = await this.getQuery();
    this.setState({
      searchQuery: getQuery,
    });
  }

  doASearch() {
    let searchType = this.state.searchType;
    let searchQuery = this.state.searchQuery;
    this.props.history.push("/search/" + searchType + "?query=" + searchQuery);
  }

  async handleChange(e) {
    await this.setState({ searchType: e.target.value });
    this.doASearch();
  }

  async onChange(e) {
    await this.setState({ searchQuery: e.target.value });
  }

  getQuery() {
    let search = "?" + window.location.href.split("?")[1];
    let params = new URLSearchParams(search);
    let query = params.has("query") ? params.get("query") : "";
    return query;
  }

  render() {
    let loading = this.state.loading;
    let searchQuery = this.state.searchQuery;
    let searchType = this.state.searchType;
    return (
      <div>
        <div className="searchArea">
          <input
            value={this.state.searchQuery}
            type="text"
            name="searchh"
            placeholder="Search"
            onChange={this.onChange}
          />
          <label className="searchTypeLabel">Type</label>
          <select
            className="searchSelect"
            id="tv"
            value={this.state.searchType}
            onChange={this.handleChange}
          >
            <option value="movie">Movie</option>
            <option value="multi">Multi</option>
            <option value="tv">TV</option>
          </select>
          <button
            onClick={(e, query, type) =>
              this.props.searchClicked(e, searchQuery, searchType)
            }
          >
            SEARCH
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchHeader);
