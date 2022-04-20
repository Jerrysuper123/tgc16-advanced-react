import React from "react";
import { useState } from "react";
import ProductContext from "./ProductContext";

export default function ProductProvider(props) {
  const [products, setProducts] = useState([
    {
      id: 1,
      product_name: "mock",
      cost: 15,
    },
    {
      id: 2,
      product_name: "mocksd",
      cost: 16,
    },
    {
      id: 3,
      product_name: "bird",
      cost: 17,
    },
  ]);

  const context = {
    //must be arrow function

    //this an accessor function to get the data
    products: () => {
      return products;
    },

    //mutator function is to modify the products

    //this is where we go the axios call
    addProducts: (productName, cost) => {
      let id = Math.floor(Math.random() * 10000 + 9999);
      setProducts([...products], {
        id: id,
        product_name: productName,
        cost: cost,
      });
    },

    getProductByID: (productId) => {
      // filter return array, we only need the first item
      return products.filter((p) => p.id === productId)[0];
    },
  };

  //higher order component - its props contain a component
  return (
    <ProductContext.Provider value={context}>
      {/* render all the children component with the context */}
      {props.children}
    </ProductContext.Provider>
  );
}
