import React from "react";
import { useEffect } from "react";
import axios from "axios";
export default function Posts() {
  const [posts, setPosts] = React.useState([]);
  //useeffect has 2 args
  //1. call bk function
  //2. what causes the call bk function be called
  useEffect(() => {
    //useEffect cannot async directly
    const fetchPosts = async () => {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setPosts(response.data);
    };
    fetchPosts();
  }, []); //emulate component didmount

  return (
    <React.Fragment>
      <h1>Posts</h1>
      <ul>
        {posts.map((p) => (
          <li>{p.title}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}
