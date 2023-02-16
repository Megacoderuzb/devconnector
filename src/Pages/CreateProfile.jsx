import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaUserAlt,
  FaYoutube,
} from "react-icons/fa";
import { Input, Button, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
const CreateProfile = () => {
  const [links, setLinks] = useState(true);
  const [values, setValues] = useState({
    job: "",
    company: "",
    bio: "",
    skills: [],
    date: "",
    website: "",
    githubusername: "",
    user: {},
    social: {
      twitter: "",
      youtube: "",
      facebook: "",
      instagram: "",
      linkedin: "",
    },
    location: "",
    education: [],
    expirience: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, []);

  function handleStatus(e) {
    setValues((oldValues) => ({
      ...oldValues,
      status: e.target.value,
    }));
  }
  function handleInput(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSocial(e) {
    setValues((ov) => ({
      ...ov,
      social: { ...ov.social, [e.target.name]: e.target.value },
    }));
  }
  const [disabledValue, setDisValue] = useState({
    optionV: "",
  });
  // let token = localStorage.getItem("token");
  async function authe() {
    let { data } = axios.get("api/auth");
    console.log(data);
  }
  authe();
  function handleCompleteProfile(e) {
    e.preventDefault();

    if (values.status === "") {
      return toast("Pleace fill out required fileds", { type: "info" });
    }
    try {
      let { data } = axios.post("api/profile", values);
      // axios.defaults.headers.common["x-auth-token"] = `Bearer ${token}`;

      // console.log(data, "data");

      // console.log(values);

      // console.log(data);

      toast("Successfully Completed", { type: "success" });

      // navigate("/das`");
    } catch (error) {
      toast(error.mesage, { type: "error" });
    }
  }
  const hendleSocialBtn = function () {
    setLinks(!links);
  };

  return (
    <div>
      <section className="RegBody container flex align-middle justify-start mx-auto py-4 w-8/12">
        <div className="w-full">
          <h2 className="text-5xl text-cyan-600 font-bold py-5">
            Create Your Profile
          </h2>
          <h4 className="flex justify-start align-middle w-full py-5 gap-2 text-2xl">
            <FaUserAlt className="text-3xl"></FaUserAlt> Let's get some
            information to make your
          </h4>
          <p>* = required field</p>
          <form onSubmit={handleCompleteProfile} className="w-full py-4">
            <select
              // defaultValue={disabledValue}
              onChange={handleStatus}
              className="w-full py-2 border-2 rounded"
              name="status"
              required
              id="selectDegree"
            >
              <option value={disabledValue}>*Select Professional Status</option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor or teacher">
                Instructor or teacher
              </option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="selectDegree" className="text-gray-500">
              Give us an idea of where you are at in your career
            </label>
            <Input
              onChange={handleInput}
              size="large"
              placeholder="Company"
              id="cpname"
              name="company"
              className="w-full mt-8"
            />
            <label htmlFor="cpname" className="text-gray-500">
              Could be your own company or one you work for
            </label>

            <Input
              onChange={handleInput}
              placeholder="Website"
              size="large"
              name="website"
              className="w-full mt-8"
              id="site"
            />
            <label htmlFor="site" className="text-gray-500 w-full">
              Could be your own or a company website
            </label>
            <Input
              onChange={handleInput}
              name="location"
              placeholder="Location"
              size="large"
              className="w-full mt-8"
              id="site"
            />
            <label htmlFor="Location" className="text-gray-500 w-full">
              City & state suggested "eg. Boston, MA"
            </label>
            <Input
              onChange={handleInput}
              name="skills"
              placeholder="*Skills"
              size="large"
              className="w-full mt-8"
              id="skills"
              required
            />
            <label htmlFor="skills" className="text-gray-500 w-full">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </label>
            <Input
              onChange={handleInput}
              name="githubusername"
              placeholder="Git-Hub UserName"
              size="large"
              className="w-full mt-8"
              id="gitusername"
            />
            <label htmlFor="gitusername" className="text-gray-500 w-full">
              If you want your latest repos and a Github link, include your
              username
            </label>
            <TextArea
              onChange={handleInput}
              showCount
              id="bio"
              name="bio"
              maxLength={200}
              style={{
                height: 120,
                marginTop: 24,
              }}
              // onChange={onChange}
              placeholder="A short bio of yourself"
            />
            <label htmlFor="bio" className="text-gray-500 w-full">
              Tell us a little about yourself
            </label>
            <div className="my-2">
              <button
                type="button"
                className="px-4 py-2 bg-gray-100"
                onClick={hendleSocialBtn}
              >
                Add Social Network Links
              </button>
              <span>Optional</span>
            </div>
            {!links && (
              <div>
                <div className="form-group social-input flex ">
                  <FaTwitter />

                  <input
                    onChange={handleSocial}
                    type="text"
                    placeholder="Twitter URL"
                    className="border-2 w-6/12"
                    name="twitter"
                  />
                </div>
                <div className="form-group social-input flex ">
                  <FaFacebook />
                  <input
                    onChange={handleSocial}
                    type="text"
                    placeholder="Facebook Url"
                    className="border-2 w-6/12"
                    name="facebook"
                  />
                </div>

                <div className="form-group social-input flex ">
                  <FaYoutube />
                  <input
                    onChange={handleSocial}
                    type="text"
                    placeholder="YuoTube URL"
                    className="border-2 w-6/12"
                    name="yuotube"
                  />
                </div>
                <div className="form-group social-input flex ">
                  <FaLinkedinIn />
                  <input
                    onChange={handleSocial}
                    className="border-2 w-6/12"
                    type="text"
                    placeholder="LinkedIn URL"
                    name="linkedin"
                  />
                </div>
                <div className="form-group social-input flex">
                  <FaInstagram />
                  <input
                    onChange={handleSocial}
                    className="border-2 w-6/12"
                    type="text"
                    placeholder="Instagram URL"
                    name="instagram "
                  />
                </div>
              </div>
            )}
            <div className="flex gap-4">
              <Button
                type="primary"
                size={"large"}
                htmlType="submit"
                className="bg-sky-500 font-semibold text-zinc-50 py-5 px-4 mt-4 block"
              >
                Submit
              </Button>
              <Button
                type="default"
                size={"large"}
                htmlType="submit"
                className=" font-semibold text-zinc-700 py-5 px-4 mt-4 block"
              >
                Go back
              </Button>
            </div>
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

export default CreateProfile;
