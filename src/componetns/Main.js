import React, { useEffect, useState } from "react";
import PostsList from "./PostsList";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import AddNewPost from "./addNewPost/AddNewPost";

const Main = () => {
  const [postsData, setPostsData] = useState([]);

  const [pageIdInsert, setPageIdInsert] = useState(); // SELECTED PAGE (Default = 1)
  const [numberOfPages, setNumberOfPages] = useState(1); // Total Number of pages on screen

  // How much we wont to display posts on one page
  const [numberOfPostsOnPage, setNumberOfPostsOnPage] = useState(4);

  //   const selectedUser = userIdInsert ? "?userId=" + userIdInsert : "";
  //   console.log(selectedUser);

  useEffect(() => {
    const fistrID =
      pageIdInsert * numberOfPostsOnPage - numberOfPostsOnPage + 1;
    console.log(pageIdInsert * numberOfPostsOnPage - numberOfPostsOnPage);
    const lastID = pageIdInsert * numberOfPostsOnPage;
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setNumberOfPages(Math.ceil(response.data.length / numberOfPostsOnPage));
      const filteredResult = response.data.filter(
        (ind) => ind.id >= fistrID && ind.id <= lastID
      );
      console.log(filteredResult);
      setPostsData(filteredResult);
    });
  }, [pageIdInsert]);

  const onPageIdHandler = (event, page) => setPageIdInsert(page);

  return (
    <React.Fragment>
      <AddNewPost />
      //Select page by number. Default setting: number of Posts on one page is{" "}
      {numberOfPostsOnPage}
      <Pagination
        count={numberOfPages}
        showFirstButton
        showLastButton
        onChange={onPageIdHandler}
      />
      <PostsList postsData={postsData} />
    </React.Fragment>
  );
};

export default Main;
