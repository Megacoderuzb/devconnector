import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = function (e) {
    e.preventdefault();
    letlocalStorage.setItem("token", {});
    localStorage.removeItem("token");
    localStorage.clear;
    async function Logout() {
      try {
        localStorage.removeItem("token");
        await axios.delete("api/profile");
        // axios.defaults.headers.common["x-auth-token"] = token;
        navigate("/login");
        toast("Loged Out", { type: "info" });
      } catch (error) {
        toast(error.message, { type: "error" });
      }
    }
    Logout();
  };
  return (
    <div>
      <nav className="flex justify-between align-middle max-w-full bg-gray-600 sticky top-0 right-0">
        <h1 className="py-2 px-3">
          <Link
            href="/"
            className="flex justify-center align-middle py-2 text-2xl font-bold text-white"
          >
            <FaCode className="py-2 text-4xl" /> MegaDevConnector
          </Link>
        </h1>
        <ul className="flex gap-4 text-xl py-4 px-4 align-middle justify-evenly text-slate-50 font-medium ">
          <li className="hover:text-sky-500">
            <Link to={"/profiles"}>Developers</Link>
          </li>
          <li
            className="hover:text-sky-700"
            hidden={!localStorage.getItem("token") ? true : false}
          >
            <Link to={"/posts"}>Posts</Link>
          </li>
          <li
            className="hover:text-sky-700"
            hidden={!localStorage.getItem("token") ? true : false}
          >
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li
            className="hover:text-sky-700"
            hidden={localStorage.getItem("token") ? true : false}
          >
            <Link to={"/register"}>Register</Link>
          </li>
          <li
            className="hover:text-sky-700"
            hidden={localStorage.getItem("token") ? true : false}
          >
            <Link to={"/login"}>Login</Link>
          </li>
          <li
            className="hover:text-sky-700 "
            hidden={!localStorage.getItem("token") ? true : false}
          >
            <Link
              onClick={handleLogout}
              className="flex w-34 gap-2"
              to={"/login"}
            >
              Logout
              <ImExit className="text-4xl py-1" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
