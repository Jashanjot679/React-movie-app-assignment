import "./App.css";
import React from "react";

import {
  HashRouter as Router,
  Switch,
  withRouter,
  Route,
} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Movie_NowPlaying from "./containers/Movie_NowPlaying";
import Movie_Popular from "./containers/Movie_Popular";
import Movie_Upcoming from "./containers/Movie_Upcoming";
import Movie_Top_Rated from "./containers/Movie_Top_Rated";
import Tv_Airing_Today from "./containers/Tv_Airing_Today";
import Tv_OnTheAir from "./containers/Tv_OnTheAir";
import Tv_Popular from "./containers/Tv_Popular";
import Tv_TopRated from "./containers/Tv_TopRated";
import Search_Movie from "./containers/Search_Movie";
import Search_Multi from "./containers/Search_Multi";
import Search_Tv from "./containers/Search_Tv";
import SearchHeader from "./containers/SearchHeader";

import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.searchClicked = this.searchClicked.bind(this);
  }
  state = {
    selectedTab: 0,
    searchQuery: "",
    loading: true,
  };

  handleClick(value, value2) {
    //console.log(value, value2);
    this.setState({ selectedTab: value2 });

    if (value2 === 0) {
      this.props.history.push("/movie/now_playing");
    } else if (value2 === 1) {
      this.props.history.push("/search/movie");
    } else if (value2 === 2) {
      this.props.history.push("/tv/on_the_air");
    }
  }

  async componentDidMount() {
    let location = this.props.location.pathname;
    if (!location && location.indexOf("movie") !== -1) {
      this.setState({ selectedTab: 0 });
      this.props.history.push("/movie/now_playing");
    } else if (!location && location.indexOf("search") !== -1) {
      this.setState({ selectedTab: 1 });
      this.props.history.push("/search/movie");
    } else if (!location && location.indexOf("tv") !== -1) {
      this.setState({ selectedTab: 2 });
      this.props.history.push("/tv/on_the_air");
    }

    this.setState({ loading: false });
  }

  async searchClicked(e, searchQuery, searchType) {
    this.setState({ loading: true });
    await this.props.history.push(
      "/search/" + searchType + "?query=" + searchQuery
    );
    this.setState({ loading: false });
  }

  render() {
    return (
      <div className="App">
        {!this.state.loading ? (
          <Router>
            <div>
              <header className="App-header">
                <h1 className="title">React Movies App</h1>
              </header>
              <div className="searchArea">
                <SearchHeader searchClicked={this.searchClicked} />
              </div>

              <main className="main">
                <Paper square>
                  <Tabs
                    value={this.state.selectedTab}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleClick}
                    aria-label=" tabs example"
                  >
                    <Tab label="Movie" />
                    <Tab label="Search" />
                    <Tab label="TV" />
                  </Tabs>
                </Paper>

                <div className="tabs">
                  <Switch>
                    {/* Movie---------------- */}
                    <Route path="/movie/popular">
                      <Movie_Popular />
                    </Route>
                    <Route path="/movie/top_rated">
                      <Movie_Top_Rated />
                    </Route>
                    <Route path="/movie/upcoming">
                      <Movie_Upcoming />
                    </Route>
                    <Route path="/movie/now_playing">
                      <Movie_NowPlaying />
                    </Route>
                    <Route exact path="/">
                      <Movie_NowPlaying />
                    </Route>

                    {/* Search---------------- */}
                    <Route path="/search/movie">
                      <Search_Movie searchQuery={this.state.searchQuery} />
                    </Route>
                    <Route path="/search/multi">
                      <Search_Multi searchQuery={this.state.searchQuery} />
                    </Route>
                    <Route path="/search/tv">
                      <Search_Tv searchQuery={this.state.searchQuery} />
                    </Route>

                    {/* Tv---------------- */}
                    <Route path="/tv/on_the_air">
                      <Tv_OnTheAir />
                    </Route>
                    <Route path="/tv/popular">
                      <Tv_Popular />
                    </Route>
                    <Route path="/tv/top_rated">
                      <Tv_TopRated />
                    </Route>
                    <Route path="/tv">
                      <Tv_Airing_Today />
                    </Route>
                  </Switch>
                </div>
              </main>
            </div>
          </Router>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default withRouter(App);
