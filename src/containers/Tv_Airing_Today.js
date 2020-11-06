import React, { Component } from "react";
import { makeRequest } from "../service/api";

import { withRouter } from "react-router-dom";
import Card2 from "./Card2";
import TvHeader from "./TvHeader";
import Card from "./Card";

class Tv_Airing_Today extends Component {
  state = {
    listType: this.props.listType,
    tvdata: [],
    loading: true,
  };

  async componentDidMount() {
    let getMovies = await makeRequest("tv/airing_today");
    this.setState({ tvdata: getMovies.results });
    if (typeof getMovies !== "undefined") {
      this.setState({ loading: false });
    }
  }

  render() {
    const { listType, tvdata, loading } = this.state;
    return (
      <div>
        <TvHeader select={"airing_today"} />
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
export default withRouter(Tv_Airing_Today);
