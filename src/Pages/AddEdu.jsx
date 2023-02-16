import React from "react";
import { Link } from "react-router-dom";
import { FaCodeBranch } from "react-icons/fa";
import { Button, Checkbox, Input } from "antd";

const AddEdu = () => {
  const onEduChecked = function (e) {
    console.log(e);
  };
  return (
    <div>
      <section className="container flex-col align-middle justify-start mx-auto py-4 w-8/12">
        <h1 className="text-cyan-500 text-5xl font-bold w-full">
          Add Your Education
        </h1>
        <h4 className="flex py-4 w-full text-2xl">
          <FaCodeBranch /> Add any school or bootcamp that you have attended
        </h4>
        <p>* = required field</p>
        <form className="form">
          <div className="form-group">
            <Input
              type="text"
              placeholder="* School or Bootcamp"
              name="title"
              required
              className="mt-5"
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              placeholder="* Degree or Sertificate"
              name="company"
              required
              className="my-5"
            />
          </div>
          <div className="form-group">
            <Input type="text" placeholder="Field of study" name="location" />
          </div>
          <div className="form-group">
            <h4 className="my-5">From Date</h4>
            <input
              type="date"
              className="w-full border-2 py-1 px-2 rounded"
              name="from"
            />
          </div>
          <div className="form-group flex gap-2 my-5">
            <Checkbox onChange={onEduChecked} />
            Current School
          </div>
          <div className="form-group">
            <h4 className="my-5">To Date</h4>
            <input
              type="date"
              className="w-full border-2 py-1 px-2 rounded"
              name="to"
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              cols="135"
              rows="6"
              placeholder="Program Description"
              className="border-2 rounded my-5"
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

export default AddEdu;
