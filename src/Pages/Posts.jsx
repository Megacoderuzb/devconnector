import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import axios from "axios";
import { FaUserAlt, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { toast } from "react-toastify";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  // const [like, setLike] = useState({});
  useEffect(() => {
    async function posts() {
      try {
        let token = localStorage.getItem("token");
        let { data } = await axios.get("/api/posts");
        axios.defaults.headers.common["x-auth-token"] = token;
        console.log(data);
        localStorage.setItem("posts", JSON.stringify(data));
        setPosts(data);
        // setlike(data.likes.length);
      } catch (error) {
        // alert(error);
        toast(error, { type: "error" });
      }
    }
    posts();
  }, [posts]);
  // let allposts = JSON.parse(localStorage.getItem("posts"));
  const textValue = function (e) {
    let value = e.target.value;

    if (value !== "") setText(value);
  };
  const hendleposting = (e) => {
    e.preventDefault();
    async function posting() {
      try {
        console.log(text);
        let { data } = await axios.post("/api/posts", text);
        let token = localStorage.getItem("token");
        if (token) axios.defaults.headers.common["x-auth-token"] = token;

        console.log(data);
        console.log(text);
        // setPosts(data);
      } catch (error) {
        // alert(error);
        toast(error, { type: "error" });
      }
    }
    posting();
  };
  // const hendleLike = function () {
  //   setLike("liked");
  // };
  // const hendleDisLike = function () {
  //   setLike("liked");
  // };
  return (
    <div>
      <section className="container flex-col align-middle justify-start mx-auto py-4 w-8/12">
        <h1 className="w-full text-5xl font-semibold text-cyan-500">Posts</h1>
        <span className="text-3xl flex py-4">
          <FaUserAlt className="text-4xl"></FaUserAlt>
          <h2>Welcome to the community</h2>
        </span>
        <div className="add-post">
          <div className="bg-cyan-500 text-white text-2xl font-semibold p-3 my-3">
            <h3>Say Something...</h3>
          </div>
          <form className="form flex-col my-1">
            <textarea
              onChange={textValue}
              className="border-2 my-5 p-4"
              name="text"
              cols="135"
              rows="5"
              placeholder="Create a post"
              required
            ></textarea>
            <Button
              htmlType="submit"
              onSubmit={hendleposting}
              type="primary"
              className="bg-stone-900 text-white font-medium w-24 px-4 my-1"
              value="Submit"
            >
              Post
            </Button>
          </form>
        </div>
        <div className="posts">
          {posts?.map((post) => {
            return (
              <div
                key={post?._id}
                className="post border-2 flex flex-wrap gap-5 align-middle my-10 bg-white p-1 "
              >
                <div className="flex-col align-middle justify-between mx-auto w-3/12">
                  <Link to={`/profile/${post?.user}`}>
                    <img className="rounded-full" src={post?.avatar} alt="" />
                    <h4 className="mx-auto text-2xl text-center">
                      {post?.name}
                    </h4>
                  </Link>
                </div>
                <div className="flex-col justify-between gap-4 h-full w-6/12">
                  <p className="my-5 text-lg  block">{post?.text}</p>
                  <p className="date text-gray-400">{post?.date}</p>
                  <article className="flex flex-wrap gap-3 align-middle">
                    <Button
                      onClick={() => {
                        try {
                          // let token = localStorage.getItem("token");
                          let { data } = axios.put(
                            `/api/posts/like/${post?._id}`
                          );
                          // console.log(data);
                          hendleLike;
                          console.log(like);
                        } catch (error) {
                          // alert(error);
                          toast(error, { type: "error" });
                        }
                      }}
                      htmltype="button"
                      type="primary"
                      className="bg-cyan-500  font-semibold pb-6 pt-6 px-2"
                    >
                      <div className="flex gap-1 pb-2">
                        <FaThumbsUp className=""></FaThumbsUp>
                        <span>{post?.likes.length}</span>
                      </div>
                    </Button>
                    <Button
                      onClick={() => {
                        try {
                          let { data } = axios.put(
                            `/api/posts/unlike/${post?._id}`
                          );
                          hendleDisLike;
                          console.log(data);
                        } catch (error) {
                          toast(error, { type: "error" });
                        }
                      }}
                      htmltype="button"
                      type="primary"
                      className="bg-cyan-500 font-semibold pb-6 pt-6 px-2"
                    >
                      <div className="flex gap-1 pb-2">
                        <FaThumbsDown className=""></FaThumbsDown>
                        <span></span>
                      </div>
                    </Button>
                    <Link
                      to={`/posts/${post?._id}`}
                      className="bg-cyan-500 text-white flex gap-1 font-semibold p-3"
                    >
                      Discussion {post?.comments.length}
                    </Link>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Posts;
