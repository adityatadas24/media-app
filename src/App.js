import React from "react";

import "../src/App.css";

import Home from "./Pages/Home";
import PostDetail from "./Pages/PostDetail";
import Navbar from "./Components/Navbar";
import UserDetail from "./Pages/UserDetail";
import Notification from "./Pages/Notification";
import Bookmark from "./Pages/Bookmark";
import Footer from "./Components/Footer";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-gray-100 h-screen w-screen realative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/detail/:id" element={<PostDetail />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/user/details" element={<UserDetail />} />
      </Routes>
      <Footer className="absolute bottom-0 " />
    </div>
  );
};

export default App;
