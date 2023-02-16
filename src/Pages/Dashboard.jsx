import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import {
  FaUserAlt,
  FaBriefcase,
  FaGraduationCap,
  FaUserMinus,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../store/slices/dashboard";
import Loader from "../components/Loader";
const Dashboard = () => {
  const [personal, setPersonalInfo] = useState();
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => user);
  let usersToken = localStorage.getItem("token");
  useEffect(() => {
    if (!usersToken) navigate("/login");
  }, []);
  useEffect(() => {
    async function dashboardInfo() {
      try {
        let { data } = await axios.get("/api/profile/me");

        // let token = localStorage.getItem("token");
        // axios.defaults.headers.common["x-auth-token"] = `Bearer ${token}`;
        setPersonalInfo(data);
        setLoad(false);
        dispatch(userProfile(data));
        // console.log(dispatch(userProfile(data)), "123");
        // console.log("123");
      } catch (error) {
        toast("Profile is not compleated", { type: "error" });
      }
    }
    dashboardInfo();
  }, []);
  console.log({ user }, "str");
  const hendleDelete = function () {
    async function deleteprofile() {
      let confirmDelete = confirm("do you wont delete profile");
      console.log(confirmDelete);
      if (confirmDelete) {
        try {
          let { data } = await axios.delete("/api/profile");
          let token = localStorage.getItem("token");
          axios.defaults.headers.common["x-auth-token"] = `Bearer ${token}`;
          localStorage.removeItem("token");
          // setPersonalInfo(data);
          navigate("/login");
        } catch (error) {
          toast("Deleted", { type: "error" });
        }
      }
    }
    deleteprofile();
  };
  console.log(personal);
  
  return (
    <div>
      <div
        // key={post?._id}
        className="container flex-col align-middle justify-start mx-auto py-4 w-8/12"
      >
        <h2 className="text-5xl font-semibold text-cyan-500">Dashboard</h2>
        <span className="text-2xl w-full flex gap-3 align-middle py-5">
          <FaUserAlt className="text-3xl"></FaUserAlt> Welcome
          <p>{personal?.user?.name}</p>
        </span>
        {!personal && (
          <div className="w-2/12">
            <Link
              to={"/create"}
              className="flex align-middle py-2 bg-cyan-500 gap-2 px-3"
            >
              <FaUserAlt className="text-2xl" />
              Create Profile
            </Link>
          </div>
        )}
        <div hidden={load ? false : true}>
          <Loader></Loader>
        </div>
        {personal && (
          <div>
            <div className="flex flex-wrap gap-2">
              <Link
                to={"/profileedit"}
                className="flex align-middle py-2 bg-gray-100 gap-2 px-3"
              >
                <FaUserAlt className="text-2xl" />
                Edit Profile
              </Link>
              <Link
                to={"/expirience"}
                className="flex align-middle py-2 bg-gray-100 gap-2 px-3"
              >
                <FaBriefcase className="text-2xl" />
                Add Expirience
              </Link>
              <Link
                to={"/education"}
                className="flex align-middle py-2 bg-gray-100 gap-2 px-3"
              >
                <FaGraduationCap className="text-2xl" />
                Add Education
              </Link>
            </div>
            <h3 className="py-5 text-3xl font-medium">
              Experience Credentials
            </h3>
            <table className="mb-10">
              <thead className="">
                <tr>
                  <th className="bg-gray-100 w-40 h-14 py-4 px-3">Company</th>
                  <th className="bg-gray-100 w-40 h-14 py-4 px-3">Title</th>
                  <th className="bg-gray-100 w-40 h-14 py-4 px-3">Years</th>
                  <th className="bg-gray-100 w-40 h-14 py-4 px-3">Action </th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
            <h3 className="py-5 text-3xl font-medium">Education Credentials</h3>
            <table className="mb-10">
              <thead className="">
                <tr>
                  <th className="bg-gray-100 w-40 h-14 py-4 px-3">School</th>
                  <th className="bg-gray-100 w-40 h-14 py-4 px-3">Degree</th>
                  <th className="bg-gray-100 w-40 h-14 py-4 px-3">Years</th>
                  <th className="bg-gray-100 w-40 h-14 py-4 px-3">Action </th>
                </tr>
              </thead>
              <tbody className=""></tbody>
            </table>
            <Button
              className="flex my-10"
              size="large"
              type="primary"
              onClick={hendleDelete}
              danger
            >
              <FaUserMinus className="text-2xl" /> Delete My Account
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
