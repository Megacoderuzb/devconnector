import React, { useState, useEffect } from "react";
import { Button, Image } from "antd";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { GiMeshNetwork } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import Loading from "../components/Load/Loading";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
const Developers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function devs() {
      try {
        let { data } = await axios.get("api/profile");
        console.log(data);
        setData(data);
      } catch (error) {
        // alert(error);
        console.log(error);
      }
    }
    devs();
  }, []);
  //   const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 3000));
  // toast.promise(
  //     functionThatReturnPromise,
  //     {
  //       pending: 'Promise is pending',
  //       success: 'Promise resolved 👌',
  //       error: 'Promise rejected 🤯'
  //     }
  // )

  return (
    <div className="container flex-col align-middle justify-start mx-auto py-4 w-8/12">
      <div hidden={!data ? false : true}>
        <Loader></Loader>
      </div>
      <h2 className="text-4xl text-cyan-600 font-bold py-5">Developers</h2>
      <span className="flex w-full align-middle">
        <GiMeshNetwork className="text-3xl" />
        <h4 className="text-2xl font-medium">
          Browse and connect with developers
        </h4>
      </span>
      <div className="devCards">
        {data?.map((p) => {
          return (
            <div
              key={p._id}
              className="card flex flex-wrap bg-gray-100 py-4 my-4"
            >
              <Image
                className="px-3 rounded-full bg-inherit"
                width={260}
                src={p.user?.avatar}
                alt={p.user?.name}
              />
              <div className="my-auto flex-col gap-4 px-16">
                <div className="text flex-1 h-4/5 mb-5">
                  <h3 className="text-3xl font-semibold">{p.user?.name}</h3>
                  <h5 className="text-xl font-medium py-5">{p?.company}</h5>
                </div>
                <div>
                  <Button
                    onClick={() => {
                      navigate(`/profile/${p.user._id}`);
                    }}
                    type="primary"
                    size={"large"}
                    htmlType="submit"
                    className="bg-cyan-500 font-semibold text-zinc-50 mt-5"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
              <div className="skills mx-auto flex-col justify-center my-auto text-teal-500">
                <article>
                  {p.skills.map((e) => {
                    return (
                      <span
                        key={crypto.randomUUID()}
                        className="flex gap-2 font-normal text-lg "
                      >
                        <FaCheck className="py-2 text-3xl" /> {e}
                      </span>
                    );
                  })}
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Developers;
