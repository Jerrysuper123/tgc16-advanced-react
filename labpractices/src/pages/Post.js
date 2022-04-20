import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Post() {
  const [post, setPost] = React.useState({});
  const [postId, setPostId] = React.useState(1);

  const fetchPost = async (id) => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/" + id
    );
    setPost(response.data);
    console.log("one post" + postId, post);
  };

  useEffect(() => {
    fetchPost(postId);
  }, [postId]);

  return (
    <React.Fragment>
      <h1>Posts</h1>
      <label>key in post id</label>
      <input
        type="text"
        value={postId}
        onChange={(e) => {
          setPostId(e.target.value);
        }}
      />
      <h3>{post.title}</h3>
      <p>{post.userId}</p>
    </React.Fragment>
  );
}
