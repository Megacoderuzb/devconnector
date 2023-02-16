import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Input, Button, Select } from "antd";
import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
const ProfileEdit = () => {
  return (
    <div>
      <section className="RegBody container flex align-middle justify-start mx-auto py-4 w-8/12">
        <div className="w-full">
          <h2 className="text-5xl text-cyan-600 font-bold py-5">
            Edit Your Profile
          </h2>
          <h4 className="flex justify-start align-middle w-full py-5 gap-2 text-2xl">
            <FaUserAlt className="text-3xl"></FaUserAlt> Add some changes to
            your profile
          </h4>
          <p>* = required field</p>
          <form className="w-full py-4">
            <Select
              className="w-full py-2 scale-y-125"
              showSearch
              id="selectDegree"
              // style={{
              //   height: 00,
              // }}
              placeholder="*Select Professional Status"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
                {
                  value: "3",
                  label: "Communicated",
                },
                {
                  value: "4",
                  label: "Identified",
                },
                {
                  value: "5",
                  label: "Resolved",
                },
                {
                  value: "6",
                  label: "Cancelled",
                },
              ]}
            />
            <label htmlFor="selectDegree" className="text-gray-500">
              Give us an idea of where you are at in your career
            </label>
            <Input
              size="large"
              placeholder="Company"
              id="cpname"
              className="w-full mt-8"
            />
            <label htmlFor="cpname" className="text-gray-500">
              Could be your own company or one you work for
            </label>

            <Input
              name="site"
              placeholder="Website"
              size="large"
              className="w-full mt-8"
              id="site"
            />
            <label htmlFor="site" className="text-gray-500 w-full">
              Could be your own or a company website
            </label>
            <Input
              name="Location"
              placeholder="Location"
              size="large"
              className="w-full mt-8"
              id="site"
            />
            <label htmlFor="Location" className="text-gray-500 w-full">
              Could be your own or a company website
            </label>
            <Input
              name="Skills"
              placeholder="*Skills"
              size="large"
              className="w-full mt-8"
              id="skills"
            />
            <label htmlFor="skills" className="text-gray-500 w-full">
              Could be your own or a company website
            </label>
            <Input
              name="gitusername"
              placeholder="Git-Hub UserName"
              size="large"
              className="w-full mt-8"
              id="gitusername"
            />
            <label htmlFor="gitusername" className="text-gray-500 w-full">
              Could be your own or a company website
            </label>
            <TextArea
              showCount
              maxLength={200}
              style={{
                height: 120,
                marginTop: 24,
              }}
              // onChange={onChange}
              placeholder="A short bio of yourself"
            />

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

export default ProfileEdit;
