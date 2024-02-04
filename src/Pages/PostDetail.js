import React, { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import { IoMdShare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import Post from "../Components/Post";

const PostDetail = () => {
  const openPost = useSelector((state) => state.openPost);

  const posts = useSelector((state) => state.posts.posts);

  const [toggleUserDetail, setToggleUserDetail] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-10 gap-10 bg-gray-100">
      <div className="text-2xl font-semibold flex items-center gap-2">
        <IoArrowBackCircleOutline className="" onClick={() => navigate("/")} />
        <p>Post Number {openPost.id}</p>
      </div>
      <div className="flex gap-5 max-sm:flex-col">
        <div className=" rounded-lg w-fit drop-shadow-xl ">
          <div className="w-96 max-sm:w-72 flex justify-between relative">
            <img
              src={openPost.image}
              className="bg-cover w-full h-full rounded-2xl drop-shadow-lg"
            />
            <div className="flex items-center w-full justify-between  mt-3 absolute bottom-1 left-3">
              <div className="w-56 ">
                <p className="font-semibold text-lg h-9 overflow-hidden text-white ">
                  {openPost.title}
                </p>
              </div>
              <div className="text-xl text-white flex gap-3 mr-5">
                <IoMdShare />
                <FaRegHeart />
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <div className="flex h-fit  gap-3">
            <div
              className={`${!toggleUserDetail && "bg-dark-orange text-white"} py-1 px-2 border cursor-pointer font-semibold  rounded shadow-xl`}
              onClick={() => setToggleUserDetail(false)}
            >
              Detail
            </div>
            <div
              className={`${toggleUserDetail && "bg-dark-orange text-white"} py-1 px-2 border cursor-pointer font-semibold  rounded shadow-xl`}
              onClick={() => setToggleUserDetail(true)}
            >
              User Info
            </div>
          </div>
          {toggleUserDetail ? (
            <div>Post was posted by user {openPost.userId}</div>
          ) : (
            <div className="max-h-80 h-fit overflow-hidden">
              {openPost.body}
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="text-2xl font-semibold flex flex-col justify-center gap-5">
          <p>More Post</p>
          <div className="container grid grid-cols-3  max-md:grid-cols-2 max-sm:grid-cols-1 flex gap-10 flex-wrap ">
            {posts.map((post) => {
              if (post.id != openPost.id) {
                return <Post post={post} key={post.id} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
