import React, { Component } from "react";
import { makeRequest } from "../service/api";
import { withRouter } from "react-router-dom";
import Card3 from "./Card3";
import Search_Default from "./Search_Default";

class Search_Tv extends Component {
  constructor(props) {
    super(props);
    this.getQuery = this.getQuery.bind(this);
  }

  state = {
    listType: this.props.listType,
    searchdata: [],
    loading: true,
    query: this.props.query,
  };

  async componentDidMount() {
    let query = await this.getQuery();

    if (query) {
      let getResults = await makeRequest("search/tv", query);
      this.setState({ searchdata: getResults.results });
      if (typeof getResults !== "undefined") {
        this.setState({ loading: false });
      }
    }
  }

  getQuery() {
    let search = "?" + window.location.href.split("?")[1];
    console.log(search);
    let params = new URLSearchParams(search);
    console.log(params);
    let query = params.has("query") ? params.get("query") : "";
    console.log(query);
    return query;
  }

  render() {
    const { searchdata, loading } = this.state;
    return (
      <div>
        {loading === false && typeof searchdata !== "undefined" ? (
          <div className="row">
            {searchdata.map(function (value, index) {
              return (
                <Card3 className={"col-md-3"} key={index} searchdata={value} />
              );
            })}

            {searchdata.length === 0 ? <p>No results found</p> : null}
          </div>
        ) : (
          <Search_Default />
        )}
      </div>
    );
  }
}
export default withRouter(Search_Tv);
