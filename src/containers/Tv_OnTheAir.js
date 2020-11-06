import React, { Component } from "react";
import { makeRequest } from "../service/api";
import { withRouter } from "react-router-dom";
import Card2 from "./Card2";
import TvHeader from "./TvHeader";

class Tv_OnTheAir extends Component {
  state = {
    listType: this.props.listType,
    tvdata: [],
    loading: true,
  };

  async componentDidMount() {
    let getResults = await makeRequest("tv/on_the_air");
    this.setState({ tvdata: getResults.results });
    if (typeof getResults !== "undefined") {
      this.setState({ loading: false });
    }
  }

  render() {
    const { tvdata, loading } = this.state;
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
