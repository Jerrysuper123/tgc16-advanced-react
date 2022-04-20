import ProductContext from "./ProductContext.js";
import React from "react";
import ProductListing from "./ProductListing.js";
import AddProduct from "./AddProduct.js";
import { useState } from "react";

function App() {
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
  ]);

  const context = {
    //must be arrow function

    //this an accessor function to get the data
    products: () => {
      return products;
    },

    //mutator function is to modify the products

    //this is where we go the axios call
    addProduct: (productName, cost) => {
      let id = Math.floor(Math.random() * 10000 + 9999);

      // make erros, [...products,{}]
      setProducts([
        ...products,
        {
          id: id,
          product_name: productName,
          cost: cost,
        },
      ]);
    },
  };

  return (
    <ProductContext.Provider value={context}>
      {/* only children of productContext can access the context */}
      <React.Fragment>
        <h1>App</h1>
        <ProductListing />
        <AddProduct />
      </React.Fragment>
    </ProductContext.Provider>
  );
}

export default App;
