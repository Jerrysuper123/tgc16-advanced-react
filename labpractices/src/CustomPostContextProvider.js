import ProductContext from "./ProductContext";
import React from "react";

export default function CustomPostContextProvider(props) {
  const [posts, setPosts] = React.useState([
    {
      id: 1,
      name: "toy",
      cost: 3,
    },
    {
      id: 2,
      name: "baloom",
      cost: 3,
    },
  ]);

  const context = {
    getPosts: () => {
      return posts;
    },

    addPost: (name, cost) => {
      let id = Math.floor(Math.random() * 100000);
      setPosts([
        ...posts,
        {
          id: id,
          name: name,
          cost: cost,
        },
      ]);
    },
    getPostByID: (postID) => {
      return posts.filter((post) => post.id === parseInt(postID))[0];
    },
  };
  return (
    <ProductContext.Provider value={context}>
      {props.children}
    </ProductContext.Provider>
  );
}
