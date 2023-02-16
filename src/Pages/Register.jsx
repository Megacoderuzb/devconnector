import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Input, Form, Button } from "antd";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [registerValues, setRegisterValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [handleConfirm, setHandleConfirm] = useState({});
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) navigate("/dashboard");
  }, [handleConfirm]);
  function checkConfirm(e) {
    setHandleConfirm(e.target.value);
  }

  async function handleRegister(e) {
    e.preventDefault();
    console.log("posting");
    try {
      let {
        data: { token },
      } = await axios.post("api/users", registerValues);
      // console.log(massage);
      localStorage.setItem("token", token);
      axios.defaults.headers.common["x-auth-token"] = token;
      if (token) navigate("/profileedit");
      if (!token) toast("Password is wrong", { type: "info" });

      toast("Registred Succesfully", { type: "success" });
      navigate("/dashboard");
      console.log(token);
    } catch (error) {
      toast(error.errors, { type: "error" });
    }
  }

  const handleRegname = function (e) {
    setRegisterValues((oldVal) => ({
      ...oldVal,
      [e.target.name]: e.target.value,
    }));
  };
  // function handleInputChange(e) {
  //   setValues((oldValues) => ({
  //     ...oldValues,
  //     [e.target.name]: e.target.value,
  //   }));
  // }

  return (
    <div>
      <section className="RegBody container flex align-middle justify-start mx-auto py-4 w-8/12">
        <div className="w-full">
          <h2 className="text-5xl text-cyan-600 font-bold py-5">Sign Up</h2>
          <h4 className="flex justify-start align-middle w-full py-5 gap-2 text-2xl">
            <FaUserAlt className="text-3xl"></FaUserAlt> Create Your Account
          </h4>
          <form onSubmit={handleRegister} className="w-full py-4">
            <Input
              name="name"
              onChange={handleRegname}
              size="large"
              required
              placeholder="Name"
              className="w-full"
            />

            <Input
              onChange={handleRegname}
              name="email"
              placeholder="Email Address"
              size="large"
              className="w-full mt-4"
              id="mail"
              required
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
            <label htmlFor="mail" className="text-gray-500">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </label>

            <Input
              onChange={handleRegname}
              name="password"
              // label="Password"
              placeholder="Password"
              size="large"
              className="w-full my-4"
              required
              min={6}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            />
            <Input
              onChange={checkConfirm}
              name="confirm"
              dependencies={["password"]}
              placeholder="Confirm Password"
              size="large"
              className="w-full mb-10"
              required
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      toast("The two passwords that you entered do not match!")
                    );
                  },
                }),
              ]}
            />

            <Button
              // onClick={handleRegBtn}
              type="primary"
              size={"large"}
              htmlType="submit"
              className="bg-sky-500 font-semibold text-zinc-50 py-3 px-4"
            >
              Register
            </Button>
          </form>
          <article className="flex py-6 gap-3">
            <p>Don't have an account?</p>
            <Link to="/login" className="text-cyan-400">
              Sign In
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Register;
