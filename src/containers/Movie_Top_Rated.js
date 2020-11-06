import React, { Component } from "react";
import { makeRequest } from "../service/api";
import Card from "./Card";
import MovieHeader from "./MovieHeader";
import { withRouter } from "react-router-dom";

class Movie_Top_Rated extends Component {
  state = {
    listType: this.props.listType,
    moviedata: [],
    loading: true,
  };

  async componentDidMount() {
    let getResults = await makeRequest("movie/top_rated");
    this.setState({ moviedata: getResults.results });
    if (typeof getResults !== "undefined") {
      this.setState({ loading: false });
    }
  }

  render() {
    const { moviedata, loading } = this.state;
    return (
      <div>
        <MovieHeader select={"top_rated"} />
        {loading === false && typeof moviedata !== "undefined" ? (
          <div className="row">
            {moviedata.map(function (value, index) {
              return (
                <Card className={"col-md-3"} key={index} moviedata={value} />
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
export default withRouter(Movie_Top_Rated);
