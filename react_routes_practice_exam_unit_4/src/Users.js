import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import compact from "lodash/compact";

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
    let { allUsers, searchedName } = this.state;

    let selectedUser;

    let allUsersMapped = allUsers.map(user => {
      // if (user.name.toLowerCase().indexOf(searchedName.toLowerCase()) === 0 )
      if (
        user.name.toLowerCase().indexOf(searchedName.toLowerCase()) === 0 ||
        user.name
          .toLowerCase()
          .split(" ")[1]
          .indexOf(searchedName.toLowerCase()) === 0
      ) {
        selectedUser = user.id;
        return (
          <div className="wantedNameDiv" key={user.id}>
            <h1>
              <Link to={`/users/${user.id}/posts`}>{user.name}</Link>
            </h1>
          </div>
        );
      } else {
        return null;
      }
    });

    let getWantedName = e => {
      e.preventDefault();
      let pickedUser = compact(allUsersMapped);
      if (pickedUser.length === 1) {
        this.props.history.push(`/users/${selectedUser}/posts`);
      }
    };

    return (
      <div className="usersMainDiv">
        <h1>USERS</h1>
        <div className="searchDiv">
          <input
            type="text"
            value={searchedName}
            onChange={this.handleTextChange}
          />
          <button onClick={getWantedName}>search</button>
        </div>
        {allUsersMapped}
      </div>
    );
  }
}

export default Users;
