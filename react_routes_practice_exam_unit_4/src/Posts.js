import React from "react";
import axios from "axios";
import { Comments } from "./Comments.js";

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      allPosts: [],
      allComments: []
    };
  }

  async componentDidMount() {
    try {
      let res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );

      this.setState({
        allComments: res.data
      });
    } catch (error) {
      console.log("Your Error :", error);
    }

    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      this.setState({
        allPosts: res.data
      });
    } catch (error) {
      console.log("Your Error :", error);
    }
  }

  render() {
    let { allPosts, allComments } = this.state;

    return (
      <div className="allPostsDiv">
        <h1>ALL POSTS</h1>
        <Comments allPosts={allPosts} allComments={allComments} />
      </div>
    );
  }
}

export default Posts;
