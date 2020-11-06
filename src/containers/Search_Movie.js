import React, { Component } from "react";
import { makeRequest } from "../service/api";
import { withRouter } from "react-router-dom";

import Card3 from "./Card3";
import Search_Default from "./Search_Default";

class Search_Movie extends Component {
  constructor(props) {
    super(props);
    this.getQuery = this.getQuery.bind(this);
  }

  state = {
    listType: this.props.listType,
    searchdata: [],
    loading: true,
    query: this.props.searchQuery,
  };

  async componentDidMount() {
    let query = await this.getQuery();

    if (query) {
      let getResults = await makeRequest("search/movie", query);

      this.setState({
        searchdata: getResults.results,
      });
      if (typeof getResults !== "undefined") {
        this.setState({ loading: false });
      }
    }
  }

  getQuery() {
    let search = "?" + window.location.href.split("?")[1];
    let params = new URLSearchParams(search);
    let query = params.has("query") ? params.get("query") : "";
    return query;
  }

  render() {
    const { searchdata, loading } = this.state;
    let query =
      this.props.searchQuery === "" && this.props.searchQuery === null;
    return (
      <div>
        {loading === false && typeof searchdata !== "undefined" && !query ? (
          <div className="row">
            {searchdata.map(function (value, index) {
              return (
                <Card3 className={"col-md-3"} key={index} searchdata={value} />
              );
            })}

            {searchdata.length === 0 ? (
              <h3 className="noResultLabel">Sorry, there are no results.</h3>
            ) : null}
          </div>
        ) : (
          <Search_Default />
        )}
      </div>
    );
  }
}
export default withRouter(Search_Movie);
