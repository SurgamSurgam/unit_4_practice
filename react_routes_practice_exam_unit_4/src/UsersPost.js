import React from "react";
import axios from "axios";

export default class UsersPost extends React.Component {
  state = {
    userPost: []
  };

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?userId=${
          this.props.match.params.id
        }`
      )
      .then(res => {
        this.setState({
          userPost: res.data
        });
      })
      .catch(err => {
        console.log("error", err);
      });
  }

  render() {
    let displayUsersPost = this.state.userPost.map(post => {
      return (
        <div key={post.id}>
          <h1>
            Post#{post.id}: {post.title} by {post.userId}
          </h1>
          <p>{post.body}</p>
        </div>
      );
    });
    return (
      <div className="usersPostsMainDiv">
        {displayUsersPost ? displayUsersPost : "not ready"}
      </div>
    );
  }
}
