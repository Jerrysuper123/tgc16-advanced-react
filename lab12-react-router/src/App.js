import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostPage from "./pages/PostPage";

import React from "react";

//router is for routing (pairing url to component),
//Routes - a group of routes
//Route - 1 pair of url to component
//link - link you can click to go to other component
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SubmittedForm from "./pages/SubmittedForm";

function App() {
  return (
    <Router>
      {/* // static element - nav bar - does not change as we click on the link */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/post-page">Post page</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/submitted-form" element={<SubmittedForm />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post-page/:post_id" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
