import React, { Component } from "react";
import { makeRequest } from "../service/api";
// import Card from "./Card";
// import MovieHeader from "./MovieHeader";
import { withRouter } from "react-router-dom";
import Card2 from "./Card2";
import TvHeader from "./TvHeader";
import Card from "./Card";

class Tv_OnTheAir extends Component {
  state = {
    listType: this.props.listType,
    tvdata: [],
    loading: true,
  };

  async componentDidMount() {
    let getMovies = await makeRequest("tv/on_the_air");
    this.setState({ tvdata: getMovies.results });
    if (typeof getMovies !== "undefined") {
      this.setState({ loading: false });
    }
  }

  render() {
    const { listType, tvdata, loading } = this.state;
    return (
      <div>
        <TvHeader select={"on_the_air"} />
        {loading === false && typeof tvdata !== "undefined" ? (
          <div className="row">
            {tvdata.map(function (value, index) {
              return (
                <Card2 className={"col-md-3"} key={index} tvdata={value} />
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
export default withRouter(Tv_OnTheAir);
