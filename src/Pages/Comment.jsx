import { Button } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Comment = () => {
  const navigate = useNavigate();
  const hendleBack = () => {
    navigate("/posts");
  };
  const { id } = useParams();
  console.log(id);
  const [comment, setCommet] = useState({});
  const [discussion, setDiscussion] = useState([]);
  // const [yanastate, setyanastate] = useState(true);
  const [text, setText] = useState("");
  useEffect(() => {
    async function comment() {
      try {
        let { data } = await axios.get(`api/posts/${id}`);
        setCommet(data);
        setDiscussion(data.comments);
        localStorage.setItem("comments", JSON.stringify(data));
        console.log(data);
      } catch (error) {
        toast(error.message, { type: "error" });
      }
    }
    comment();
  }, []);
  let variable = localStorage.getItem("comments");
  console.log(JSON.parse(variable), "this");
  console.log(comment);
  const hendleTxt = function (e) {
    setText();
  };
  const hendleCommit = function (e) {
    e.preventDefault();
    async function newcomment() {
      try {
        let { commit } = await axios.post(`api/posts/${id}`, text);
        // setCommet(commit);

        setDiscussion(commit.comments);
        console.log(commit);
      } catch (error) {
        toast(error.message, { type: "error" });
      }
    }
    newcomment();
  };
  console.log(discussion, "is");
  // if (discussion.length !== 0 && discussion.length !== {}) {
  //   setyanastate(false);
  // }

  return (
    <div>
      <section className="container flex-col align-middle justify-start mx-auto py-4 w-8/12">
        <Button
          onClick={hendleBack}
          className="back border-2 bg-gray-100"
          type="defoult"
          size="large"
        >
          Back To Profiles
        </Button>
        <div className="post border-2 flex flex-wrap gap-5 align-middle my-10 p-4 bg-white ">
          <div className="flex-col align-middle justify-between">
            <Link to={`/profile/${comment.user}`}>
              <img
                className="rounded-full"
                src={comment?.avatar}
                alt={comment?.name}
              />
              <h4 className="mx-auto text-2xl pl-10">{comment?.name}</h4>
            </Link>
          </div>
          <div className="flex-col justify-between h-full">
            <p className="my-5 text-lg">{comment?.text}</p>
            <p className="date text-gray-400">{comment?.date}</p>
            <article className="flex gap-3 align-middle">
              <Button
                onClick={() => {
                  try {
                    // let token = localStorage.getItem("token");
                    let { data } = axios.put(`/api/posts/like/${comment?._id}`);
                    console.log(data);
                    setlike((like = !like));
                    console.log(like);
                  } catch (error) {
                    // alert(error);
                    toast("Already liked", { type: "error" });
                  }
                }}
                htmltype="button"
                type="primary"
                className="bg-cyan-500  font-semibold pb-6 pt-6 px-2"
              >
                <div className="flex gap-1 pb-2">
                  <FaThumbsUp className="text-4xl px-2 pb-4"></FaThumbsUp>
                  <span>{comment?.likes?.length}</span>
                </div>
              </Button>
              <Button
                onClick={() => {
                  try {
                    let { data } = axios.put(`/api/posts/unlike/${post?._id}`);
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
                  <FaThumbsDown className="text-4xl px-2 pb-4"></FaThumbsDown>
                </div>
              </Button>
              <button
                // to={"/discussion"}
                className="bg-cyan-500 py-3 px-3 text-white flex gap-1 font-semibold p-3"
              >
                Discussion
                <span>{comment?.comments?.length}</span>
              </button>
            </article>
          </div>
        </div>
        <div className="post-form">
          <div className="bg-cyan-500 text-white text-2xl font-semibold p-3 my-3">
            <h3>Leave a Comment</h3>
          </div>
          <form className="form flex-col my-1">
            <textarea
              onChange={hendleTxt}
              className="border-2 my-5 p-4"
              name="text"
              cols="135"
              rows="5"
              placeholder="Comment the post"
              required
            ></textarea>
            <Button
              onSubmit={hendleCommit}
              htmlType="submit"
              type="primary"
              className="bg-stone-900 text-white font-medium w-24 px-4 my-1"
              value="Submit"
            >
              Post
            </Button>
          </form>
        </div>
        <div>
          {discussion?.map((e) => {
            return (
              <div key={e?._id} className="comments my-10  border-2 rounded">
                <div className="flex gap-10">
                  <div className="flex-col w-1/4 mx-auto align-middle justify-between py-5 px-4">
                    <Link to={"/profile/63e884058861e7003472d05e"}>
                      <img
                        className="rounded-full"
                        width={200}
                        src={e?.avatar}
                        alt={e?.name}
                      />
                      <h4 className="mx-auto text-2xl pl-10">{e?.name}</h4>
                    </Link>
                  </div>
                  <div className="flex-col justify-between w-3/4 mx-auto h-full align-middle my-auto">
                    <p className="my-5 text-lg">{e?.text}</p>
                    <p className="date text-gray-400">{e?.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Comment;
