import React, { useContext } from "react";

import ProductContext from "./ProductContext";
import { Link } from "react-router-dom";

export default function ProductListing() {
  let context = useContext(ProductContext);

  return (
    <React.Fragment>
      <h1>product lists</h1>
      <ul>
        {context.products().map((p) => (
          <li key={p.id}>
            <Link to={"/" + p.id}>
              {p.product_name}-${p.cost}
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
