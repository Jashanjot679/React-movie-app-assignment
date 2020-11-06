import "./App.css";
import React from "react";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Tab, TabPanel, TabList, Tabs } from "react-tabs";

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

import {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.searchClicked = this.searchClicked.bind(this);
  }
  state = {
    searchQuery:''
  };
  handleClick(event) {
    // this.props.history.push('/search/movie');
window.location.href='http://localhost:3000/search/movie'
  }
  searchClicked(query) {

    this.setState({ searchQuery: query });

  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <h1 className="title">React Movies App</h1>
            </header>
            <div className="searchArea">
              <SearchHeader searchClicked={this.searchClicked} />
            </div>

            <main className="main">
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}


              <div className="tabs">
                <Switch>
                  <Tabs>
                    <TabList>
                      <Tab tabIndex="0">MOVIES</Tab>
                      <Tab tabIndex="0" onClick={this.handleClick}>
                        SEARCH
                      </Tab>
                      <Tab tabIndex="0">TV SHOWS</Tab>

                    </TabList>

                    <TabPanel>
                      {/* Movie */}

                      <Route path="/movie/popular">
                        <Movie_Popular />
                      </Route>
                      <Route path="/movie/top_rated">
                        <Movie_Top_Rated />
                      </Route>
                      <Route path="/movie/upcoming">
                        <Movie_Upcoming />
                      </Route>
                      <Route path="/">
                        <Movie_NowPlaying />
                      </Route>
                    </TabPanel>
                    <TabPanel>
                      {/* **********************************/}
                      {/* search */}
                      {/* **********************************/}
                      {/* <SearchHeaderDefault /> */}
                      <Route path="/search/movie">
                        <Search_Movie query={this.state.searchQuery} />
                      </Route>
                      <Route path="/search/multi">
                        <Search_Multi query={this.state.searchQuery}/>
                      </Route>
                      <Route path="/search/tv">
                        <Search_Tv query={this.state.searchQuery}/>
                      </Route>

                      {/* <Route path="/">
                      <Search_Default />
                    </Route> */}
                    </TabPanel>
                    <TabPanel>
                      {/* Tv */}

                      <Route path="/tv/on_the_air">
                        <Tv_OnTheAir />
                      </Route>
                      <Route path="/tv/popular">
                        <Tv_Popular />
                      </Route>
                      <Route path="/tv/top_rated">
                        <Tv_TopRated />
                      </Route>

                      <Route path="/">
                        <Tv_Airing_Today />
                      </Route>
                    </TabPanel>
                  </Tabs>
                </Switch>
              </div>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
