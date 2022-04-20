import React, { useContext } from "react";

import ProductContext from "./ProductContext";

export default function ProductListing() {
  let context = useContext(ProductContext);

  return (
    <React.Fragment>
      <h1>product lists</h1>
      <ul>
        {context.products().map((p) => (
          <li key={p.id}>
            {p.product_name}-${p.cost}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
