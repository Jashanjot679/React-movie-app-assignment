import React, { Component } from "react";
import { makeRequest } from "../service/api";
import { withRouter } from "react-router-dom";

import Card3 from "./Card3";
import Search_Default from "./Search_Default";

class Search_Movie extends Component {
  constructor(props) {
    super(props);

  }
  state = {
    listType: this.props.listType,
    searchdata: [],
    searchTerm: "",
    loading: true,
    query:this.props.query
  };

  async componentDidMount() {
    let getMovies = await makeRequest("search/movie", this.state.query);
    console.log(getMovies);
    this.setState({
      searchdata: getMovies.results,
    });
    if (typeof getMovies !== "undefined") {
      this.setState({ loading: false });
    }
  }

  render() {
    const { listType, searchdata, loading } = this.state;
    return (
      <div>
        {/*<Search_Default/>*/}
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
export default withRouter(Search_Movie);
