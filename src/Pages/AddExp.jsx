import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCodeBranch } from "react-icons/fa";
import { Button, Checkbox, Input } from "antd";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

const AddExp = () => {
  const [regions, setRegions] = useState([]);
  const [exp, setexp] = useState({
    company: "",
    current: false,
    description: "",
    from: "",
    location: "",
    title: "",
    to: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, []);

  // useEffect(() => {
  //   async function getRegions() {
  //     let { data } = await axios.get("/regions");

  //     setRegions(data.regions);
  //   }

  //   getRegions();
  // }, []);

  function handleInput(e) {
    setexp((ov) => ({
      ...ov,
      [e.target.name]: e.target.value,
    }));
  }
  const onChecked = function () {
    setexp = !exp;
  };

  // function handleRegionChange(e) {
  //   let regionId = e.target.value;

  //   let {
  //     city: { _id: cityId },
  //   } = regions.find((r) => r._id === regionId);

  //   setValues((ov) => ({
  //     ...ov,
  //     address: {
  //       ...ov.address,
  //       city: cityId,
  //       region: regionId,
  //     },
  //   }));
  // }

  // function handleFullAddressChange(e) {
  //   setValues((ov) => ({
  //     ...ov,
  //     address: { ...ov.address, full: e.target.value },
  //   }));
  // }
  console.log({ exp });
  async function addExp(e) {
    e.preventDefault();
    if (exp.company === "")
      return toast("Pleace fill out empty fields", { type: "info" });
    if (exp.company === "")
      return toast("Pleace fill out empty fields", { type: "info" });
    if (exp.company === "")
      return toast("Pleace fill out empty fields", { type: "info" });
    try {
      console.log(exp);
      let { data } = await axios.post("api/profile", {
        company: exp.company,
        current: exp.current,
        description: exp.description,
        from: exp.from,
        location: exp.location,
        title: exp.title,
        to: exp.to,
      });

      console.log(data);
      toast("Successfully Completed", { type: "success" });

      navigate("/profile");
    } catch (error) {
      toast(error.message, { type: "error" });
    }
  }
  return (
    <div>
      <section className="container flex-col align-middle justify-start mx-auto py-4 w-8/12">
        <h1 className="text-cyan-500 text-5xl font-bold w-full">
          Add An Experience
        </h1>
        <h4 className="flex py-4 w-full text-2xl">
          <FaCodeBranch /> Add any developer/programming positions that you have
          had in the past
        </h4>
        <p>* = required field</p>
        <form onSubmit={addExp} className="form">
          <div className="form-group">
            <Input
              type="text"
              placeholder="* Job Title"
              name="title"
              required
              className="mt-5"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              placeholder="* Company"
              name="company"
              required
              className="my-5"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              placeholder="Location"
              name="location"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <h4 className="my-5">From Date</h4>
            <input
              type="date"
              className="w-full border-2 py-1 px-2 rounded"
              name="from"
              onChange={handleInput}
            />
          </div>
          <div className="form-group flex gap-2 my-5">
            <Checkbox onChange={onChecked} />
            Current Job
          </div>
          <div className="form-group">
            <h4 className="my-5">To Date</h4>
            <input
              type="date"
              className="w-full border-2 py-1 px-2 rounded"
              name="to"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              cols="135"
              rows="6"
              placeholder="Job Description"
              className="border-2 rounded my-5"
              onChange={handleInput}
            ></textarea>
          </div>
          <Button className="bg-cyan-500 mr-5" type="primary" htmlType="submit">
            Submit
          </Button>
          <Link
            to={"/dashboard"}
            className="btn btn-light my-1"
            href="/dashboard"
          >
            Go Back
          </Link>
        </form>
      </section>
    </div>
  );
};

export default AddExp;
