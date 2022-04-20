import React, { useContext, useState } from "react";
import { useEffect } from "react";
import ProductContext from "../ProductContext";
import { Link } from "react-router-dom";

export default function About() {
  let context = useContext(ProductContext);
  const [post, setPost] = useState({
    name: "",
    cost: 0,
  });

  const updateFormField = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onAddPost = () => {
    context.addPost(post.name, post.cost);
  };

  console.log("calling context in about js", context.getPosts());
  return (
    <React.Fragment>
      <ul>
        <h1>product list</h1>
        {context.getPosts().map((p) => (
          <Link to={"/details/" + p.id}>
            <li>
              {p.name} - {p.cost}
            </li>
          </Link>
        ))}
      </ul>
      <h3>Add product</h3>
      <div>
        <label>name</label>
        <input
          type="text"
          name="name"
          value={post.name}
          onChange={updateFormField}
        />
        <input
          type="text"
          name="cost"
          value={post.cost}
          onChange={updateFormField}
        />
        <button onClick={onAddPost}>Submit</button>
      </div>
    </React.Fragment>
  );
}
