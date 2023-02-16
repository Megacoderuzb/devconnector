import { Button, Input, message } from "antd";
// import { set } from "immer/dist/internal";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import login from "../store/slices/addedu";

const Login = () => {
  const navigate = useNavigate();
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  async function userLogin(e) {
    e.preventDefault();
    toast("pending", { type: "info" });
    try {
      let {
        data: { token },
      } = await axios.post("api/auth", loginValues);
      // let {
      //   data: { token },
      // } = await axios.get("api/auth", loginValues);
      console.log(token);
      localStorage.setItem("token", token);
      // axios.defaults.headers.common["x-auth-token"] = token;
      if (token) navigate("/dashboard");
      // if (data.status >= 400) toast("Password is wrong", { type: "info" });

      toast("Logged Succesfully", { type: "success" });
      navigate("/dashboard");
      // console.log(token);
    } catch (error) {
      toast("user not found", { type: "error" });
    }
  }

  const handleLogname = function (e) {
    setLoginValues((ov) => ({
      ...ov,
      [e.target.name]: e.target.value,
    }));
  };
  // useEffect(() => {
  let token = localStorage.getItem("token");
  if (token) navigate("/dashboard");
  // }, []);
  // async function userLogin(e) {
  //   e.preventDefault();

  //   try {
  //     console.log(loginValues);
  //     let {
  //       data: { token, message },
  //     } = await axios.post("/api/auth", loginValues);
  //     localStorage.setItem("token", token);
  //     axios.defaults.headers.common["x-auth-token"] = `Bearer ${token}`;
  //     console.log(token);
  //     toast(message, { type: "success" });

  //     dispatch(login(data.loginValues));

  //     navigate("/profile");
  //   } catch (error) {
  //     // handle error
  //     toast(error, { type: "error" });
  //   }
  // }
  return (
    <div className="container flex-col align-middle justify-start mx-auto py-4 w-8/12">
      <h2 className="text-5xl font-bold text-cyan-600">Sign In</h2>
      <span className="text-2xl w-full flex gap-3 align-middle py-5">
        <FaUserAlt className="text-3xl"></FaUserAlt> Sign Into Your Account
      </span>

      <form onSubmit={userLogin}>
        <Input
          onChange={handleLogname}
          name="email"
          placeholder="Email Address"
          size="large"
          className="w-full mt-4"
          id="mail"
          // value={""}
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        />

        <Input
          onChange={handleLogname}
          name="password"
          type="password"
          // label="Password"
          placeholder="Password"
          size="large"
          className="w-full my-4"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        />
        <Button
          type="primary"
          size={"large"}
          htmlType="submit"
          className="bg-sky-500 font-semibold text-zinc-50 py-3 px-4"
        >
          {/* <Link to={"/"}> */}
          Login
          {/* </Link> */}
        </Button>
      </form>
      <article className="flex py-6 gap-3">
        <p>Don't have an account?</p>
        <Link to="/register" className="text-cyan-400">
          Sign Up
        </Link>
      </article>
    </div>
  );
};

export default Login;
