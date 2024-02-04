import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setOpenPost } from "../redux/features/openPostSlice";

const Post = ({ post }) => {
  const [readMore, setReadMore] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const [image, setImage] = useState(
    `https://picsum.photos/200?random=${post.id}`
  );

  const dispatch = useDispatch();

  const postBodyRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (postBodyRef.current) {
      const isOverflowing =
        postBodyRef.current.scrollHeight > postBodyRef.current.clientHeight;
      setIsOverflowing(isOverflowing);
    }
  }, [post.body]);

  return (
    <div className="bg-white rounded-lg w-fit p-5 drop-shadow-xl">
      <div className="">
        <img
          src={image}
          className="bg-cover w-full h-full rounded-2xl drop-shadow-lg"
        />
      </div>
      <div className="flex items-center justify-between mt-3 gap-2">
        <div className="">
          <p className="font-semibold text-lg h-9 overflow-hidden">
            {post.title}
          </p>
          <p
            className={`text-gray-500 h-36 text-md overflow-hidden ${
              isOverflowing ? "max-h-36" : ""
            }`}
            ref={postBodyRef}
          >
            {post.body}
          </p>
          <span
            className="text-dark-orange font-semibold cursor-pointer"
            onClick={() => {
              dispatch(setOpenPost({ ...post, image }));
              navigate(`/post/detail/${post.id}`);
            }}
          >
            {isOverflowing && "Read more..."}
          </span>
        </div>
        <div
          className="p-3 bg-black flex items-center cursor-pointer justify-center bg-gradient-to-r from-light-orange -rotate-90 to-dark-orange rounded-md  hover:from-dark-orange hover:to-dark-orange"
          onClick={() => {
            navigate(`/post/detail/${post.id}`);
            dispatch(setOpenPost({ ...post, image }));
          }}
        >
          <FaAngleRight className="text-white rotate-90 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Post;
