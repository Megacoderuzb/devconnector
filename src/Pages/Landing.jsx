import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, []);
  

  return (
    <div>
      <section className="landing min-w-full">
        <div className="LandingBody"></div>
        <article className="flex-col justify-center align-middle text-white py-52 opacity-100 absolute top-0 mx-auto left-1/4 right-1/4">
          <h2 className="text-center  text-6xl font-semibold ">
            Developer Connector
          </h2>
          <h4 className="text-center text-2xl py-4 text-slate-50 opacity-100">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </h4>
          <span className="btn-group flex justify-center align-middle py-3 px-3 gap-5">
            <Link
              to={"/register"}
              className="bg-cyan-400 opacity-100 py-3 px-3"
            >
              Sign Up
            </Link>
            <Link
              to={"/login"}
              className="bg-zinc-50 text-stone-900 bg-opacity-100 px-4 py-3"
            >
              Login
            </Link>
          </span>
        </article>
      </section>
    </div>
  );
};

export default Landing;
