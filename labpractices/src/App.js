import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Thank from "./pages/Thank";
import Post from "./pages/Post";
import ProductContext from "./ProductContext";
import CustomPostContextProvider from "./CustomPostContextProvider";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
function App() {
  // console.log("calling in app js context f", context.getPosts());
  return (
    <div className="App">
      <h1>App js</h1>

      <CustomPostContextProvider>
        <Router>
          <nav>
            <li>
              <Link to="/landing">Landing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/post">Post</Link>
            </li>
          </nav>
          <Routes>
            <Route path="/landing" element={<Landing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/thank" element={<Thank />} />
            <Route path="/post" element={<Post />} />
            <Route
              path="/details/:productID"
              element={<ProductDetailsPage />}
            />
          </Routes>
        </Router>
      </CustomPostContextProvider>
    </div>
  );
}

export default App;
