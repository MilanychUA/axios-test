import React from "react";

const Post = (props) => {
  return (
    <div>
      <p>
        <label>{props.userId} --- UserID </label>
        <label>{props.id} --- ID </label>
      </p>
      <p>
        <label>{props.title} </label>
      </p>
      <p>
        <label>{props.body} </label>
      </p>
    </div>
  );
};

export default Post;
