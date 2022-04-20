import React, { useState, useContext } from "react";
import ProductContext from "../ProductContext";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ProductDetailsPage() {
  let context = useContext(ProductContext);
  const params = useParams();
  //   console.log("params", params);
  let productID = params.productID;
  //   console.log("product details", context);

  const [post, setPost] = useState({
    id: 1,
    name: "nA",
    cost: 0,
  });

  useEffect(() => {
    let post = context.getPostByID(productID);
    setPost(post);
  }, [productID]);

  return (
    <ul>
      <h3>Product details</h3>

      <li>
        {post.id}-{post.name}- ${post.cost}
      </li>
    </ul>
  );
}
