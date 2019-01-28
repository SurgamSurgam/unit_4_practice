import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      allUsers: [],
      searchedName: "",
      submit: true
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setState({
        allUsers: res.data
      });
    });
  }

  handleTextChange = e => {
    this.setState({
      searchedName: e.target.value
    });
  };

  getWantedName = e => {
    e.preventDefault();
    this.setState({
      submit: true
    });
  };

  render() {
    console.log(this.state);
    let { allUsers, searchedName, submit } = this.state;

    let allUsersMapped = allUsers.map(user => {
      if (submit) {
        if (user.name.toLowerCase().indexOf(searchedName.toLowerCase()) === 0) {
          return (
            <div className="wantedNameDiv">
              <h1>
                <Link to={`/users/${user.id}/posts`}>{user.name}</Link>
              </h1>
            </div>
          );
        } else {
          return null;
        }
      } else {
        return (
          <div className="allUsersMappedDiv" key={user.id}>
            <h1>
              <Link to={`/users/${user.id}/posts`}>{user.name}</Link>
            </h1>
          </div>
        );
      }
    });

    return (
      <>
        <h1>USERS</h1>
        <div className="searchDiv">
          <input
            type="text"
            value={searchedName}
            onChange={this.handleTextChange}
          />
          <button onClick={this.getWantedName}>search</button>
        </div>
        {allUsersMapped}
      </>
    );
  }
}

export default Users;
