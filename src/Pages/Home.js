import React, { useEffect, useState } from "react";

import { IoMdSearch } from "react-icons/io";

import Post from "../Components/Post";

import axios from "axios";

import { BsArrowClockwise } from "react-icons/bs";

import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/features/posts";

const Home = () => {
  const [search, setSearch] = useState("");

  const posts = useSelector((state) => state.posts.posts);

  const loading = useSelector((state) => state.posts.loading);

  const [filteredPost, setFilteredPost] = useState(
    useSelector((state) => state.posts.posts)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    let newArrr = [];
    if (posts) {
      setFilteredPost(
        posts.filter((post) => {
          if (post.title.includes(search)) {
            return post;
          }
          return null;
        })
      );
    }
  }, [search, posts]);

  return (
    <div className="flex flex-col p-10 gap-10 bg-gray-100">
      <div className="text-2xl font-semibold">Social Media For Travellers</div>
      <div className="flex items-center gap-3 bg-white p-3 rounded-md drop-shadow-xl">
        <IoMdSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full outline-none"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      {!loading ? (
        <div className="container grid grid-cols-3 xl:grid-cols-4 max-lg-grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 flex gap-5 flex-wrap ">
          {filteredPost &&
            filteredPost.map((post) => {
              return <Post post={post} key={post.id} />;
            })}
        </div>
      ) : (
        <div className="flex items-center justify-center items-center w-full h-full">
          <BsArrowClockwise className="animate-spin text-6xl text-dark-orange" />
        </div>
      )}
    </div>
  );
};

export default Home;
