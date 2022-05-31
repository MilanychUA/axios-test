import React from "react";
import axios from "axios";
import Post from "../Post";

const AddNewPost = () => {
  // Here wi will make request POST to BD with our new post
  const newPost = {
    id: Math.random(),
    userId: Math.random(),
    title: "I added my first post in DataBase",
    body: "LA LALAL ALAL ALLALLA  ALLA ALLAL",
  };
  const newPost2 = {
    id: 1022,
    userId: Math.random(),
    title: "I added my first post in DataBase",
    body: "LA LALAL ALAL ALLALLA  ALLA ALLAL",
  };
  
  console.log(newPost);

  const addRequest = () =>
    axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: newPost
    }).then((response) => console.log(response));

  return (
    <div>
      <button value="add" onClick={addRequest}>
        ADD
      </button>
    </div>
  );
};

export default AddNewPost;
