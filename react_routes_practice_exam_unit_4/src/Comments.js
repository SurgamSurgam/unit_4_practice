import React from "react";

export const Comments = props => {
  let { allPosts, allComments, allUsersCopy } = props;

  let allcommentsMapped = allComments.map((comment, i) => {
    return (
      <li id={comment.postId} key={i}>
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
    let idPostUserMatch = allUsersCopy.filter(user => {
      return user.id === post.userId;
    });

    return (
      <div className="allpostsMappedDiv" key={post.id}>
        <h1>
          {post.title} by user:{" "}
          {idPostUserMatch ? idPostUserMatch[0].name : post.id}
        </h1>
        <p>{post.body}</p>
        <ul>{idCommentPostMatch}</ul>
      </div>
    );
  });

  return <>{allpostsMapped}</>;
};
