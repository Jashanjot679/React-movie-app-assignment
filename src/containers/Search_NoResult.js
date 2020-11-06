import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { makeRequest } from "../service/api";
import Card3 from "./Card3";
import Error_Card from "./Error_Card";

class Search_NoResult extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Error_Card />
        </div>
      </div>
    );
  }
}
export default withRouter(Search_NoResult);
