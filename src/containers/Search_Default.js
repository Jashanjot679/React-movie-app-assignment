import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Search_Movie extends Component {
  render() {
    return (
      <div className="def">
        <h3>Please initiate a search.</h3>
      </div>
    );
  }
}
export default withRouter(Search_Movie);
