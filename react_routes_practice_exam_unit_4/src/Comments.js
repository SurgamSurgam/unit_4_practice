import React from "react";

export const Comments = props => {
  let { allPosts, allComments } = props;

  let allcommentsMapped = allComments.map(comment => {
    return (
      <li id={comment.postId}>
        <h1>{comment.name}</h1>
        <h3>{comment.email}</h3>
        <p>{comment.body}</p>
      </li>
    );
  });

  let allpostsMapped = allPosts.map(post => {
    let idCommentPostMatch = allcommentsMapped.filter(comment => {
      return comment.props.id === post.id;
    });

    return (
      <div className="allpostsMappedDiv" key={post.id}>
        <h1>
          {post.title} by user: {post.userId}
        </h1>
        <p>{post.body}</p>
        <ul>{idCommentPostMatch}</ul>
      </div>
    );
  });

  return <>{allpostsMapped}</>;
};
