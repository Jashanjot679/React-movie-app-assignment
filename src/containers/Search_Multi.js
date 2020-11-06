import React, { Component } from "react";
import { makeRequest } from "../service/api";
import { withRouter } from "react-router-dom";

import Card3 from "./Card3";

class Search_Multi extends Component {
  state = {
    listType: this.props.listType,
    searchdata: [],
    searchTerm: "",
    loading: true,
  };

  async componentDidMount() {
    let getMovies = await makeRequest("search/multi", "kill");
    this.setState({ searchdata: getMovies.results });
    if (typeof getMovies !== "undefined") {
      this.setState({ loading: false });
    }
  }

  render() {
    const { listType, searchdata, loading } = this.state;
    return (
      <div>
        {/* <SearchHeader select={"multi"} /> */}
        {loading === false && typeof searchdata !== "undefined" ? (
          <div className="row">
            {searchdata.map(function (value, index) {
              return (
                <Card3 className={"col-md-3"} key={index} searchdata={value} />
              );
            })}
          </div>
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
}
export default withRouter(Search_Multi);
