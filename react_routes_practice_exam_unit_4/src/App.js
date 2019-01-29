import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home.js";
import { Navbar } from "./Navbar.js";
import Users from "./Users.js";
import Posts from "./Posts.js";
import Albums from "./Albums.js";
import Todos from "./Todos.js";
import UsersPost from "./UsersPost.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/albums/:id" component={Albums} />
          <Route exact path="/albums" component={Albums} />
          <Route path="/todos" component={Todos} />
          <Route path="/users/:id/posts" component={UsersPost} />
          <Route path="/users" component={Users} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
