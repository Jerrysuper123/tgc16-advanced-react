import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const [currentPost, setCurrentPost] = useState("");
  const [currentPostID, setCurrentPostId] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/" + currentPostID
      );
      setCurrentPost(response.data);
    };
    fetchPost();
  }, [currentPostID]);

  const params = useParams();

  useEffect(() => {
    setCurrentPostId(params.post_id);
  }, []);

  return (
    <React.Fragment>
      <h1>title: {currentPost.title}</h1>
      <h1>user: {currentPost.userId}</h1>
    </React.Fragment>
  );
}
