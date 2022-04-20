import ProductProvider from "./ProductProvider.js";
import React from "react";
import ProductListingPage from "./pages/ProductListingPage.js";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage.js";

function App() {
  return (
    <ProductProvider>
      {/* only children of productContext can access the context */}
      <Router>
        <Routes>
          <Route path="/" element={<ProductListingPage />} />
          <Route path="/:productId" element={<ProductDetailsPage />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
