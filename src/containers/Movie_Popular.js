import React, { Component } from "react";
import { makeRequest } from "../service/api";
import Card from "./Card";
import MovieHeader from "./MovieHeader";
import { withRouter } from "react-router-dom";

class Movie_Popular extends Component {
  state = {
    listType: this.props.listType,
    moviedata: [],
    loading: true,
  };

  async componentDidMount() {
    let getMovies = await makeRequest("movie/popular");
    this.setState({ moviedata: getMovies.results });
    if (typeof getMovies !== "undefined") {
      this.setState({ loading: false });
    }
  }

  render() {
    const { listType, moviedata, loading } = this.state;
    return (
      <div>
        <MovieHeader select={"popular"} />
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
export default withRouter(Movie_Popular);
