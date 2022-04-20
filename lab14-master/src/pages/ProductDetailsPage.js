import React from "react";
import { useEffect } from "react";
//product id is from the url
import { useParams } from "react-router-dom";

import ProductContext from "../ProductContext";
import { useContext } from "react";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = React.useState({});
  const context = useContext(ProductContext);

  useEffect(() => {
    const fetchProduct = () => {
      let tempProduct = context.getProductByID(parseInt(productId));
      setProduct(tempProduct);
    };

    fetchProduct();
  }, [productId]);

  return (
    <React.Fragment>
      <h1>Product details</h1>
      <ul>
        <li>id: {product.id}</li>
        <li>name: {product.product_name}</li>
        <li>cost: {product.cost}</li>
      </ul>
    </React.Fragment>
  );
}
