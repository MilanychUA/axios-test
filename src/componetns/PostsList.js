import React, { useState } from "react";
import Post from "./Post";

const PostsList = (props) => { 
  return (
    <div>
      {props.postsData.map((element) => (
        <Post
          key={Math.random()}
          id={element.id}
          userId={element.userId}
          title={element.title}
          body={element.body}
        />
      ))}
    </div>
  );
};

export default PostsList;
