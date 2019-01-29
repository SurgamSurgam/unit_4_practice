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
  state = {
    allUsersCopy: []
  };

  updateHereAllUsers = originalUsers => {
    this.setState({
      allUsersCopy: originalUsers
    });
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            path="/posts"
            render={() => <Posts allUsersCopy={this.state.allUsersCopy} />}
          />
          <Route path="/albums/:id" component={Albums} />
          <Route exact path="/albums" component={Albums} />
          <Route path="/todos" component={Todos} />
          <Route path="/users/:id/posts" component={UsersPost} />
          <Route
            path="/users"
            render={() => (
              <Users updateHereAllUsers={this.updateHereAllUsers} show={true} />
            )}
          />
          <Route path="/" component={Home} />
        </Switch>
        {/*corey's hack to avoid having to do api call from here to get users
        and then prop drilling the data to correct component*/}
        <Route
          path="/"
          render={props => (
            <Users
              {...props}
              updateHereAllUsers={this.updateHereAllUsers}
              show={false}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
