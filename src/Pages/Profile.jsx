import React, { useState, useEffect } from "react";
import { Button, Image, Divider, Space, Tag } from "antd";
import axios from "axios";
import {
  FaCheck,
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();
  const hendleBack = function () {
    navigate("/profiles");
  };
  const { id } = useParams();
  console.log(id);
  const [person, setPerson] = useState({});
  useEffect(() => {
    async function currentUser() {
      try {
        let { data } = await axios.get(`api/profile/user/${id}`);
        // console.log();(data);
        setPerson(data);
        localStorage.setItem("selectedProfile", JSON.stringify(data));
        console.log(data);
      } catch (error) {
        toast(error.msg, { type: "error" });
      }
    }
    currentUser();
  }, []);
  console.log(person, "person");
  // if (!person) return;
  return (
    <div>
      {person && (
        <section className="container flex-col align-middle justify-start mx-auto py-4 w-8/12">
          <Button
            onClick={hendleBack}
            className="back border-2 bg-gray-100"
            type="defoult"
            size="large"
          >
            Back To Profiles
          </Button>
          <div className="my-4 profile">
            <div className="profile-top bg-cyan-600 p-2">
              <img
                className="rounded-full my-1 mx-auto py-4"
                src={person?.user?.avatar}
                alt=""
              />
              <h1 className="w-full text-4xl  mx-auto text-white py-3 text-center">
                {person?.user?.name}
              </h1>
              <p className="lead w-full text-2xl mx-auto text-white py-3 mb-10 text-center">
                {person?.status} <span hidden={!person.company}> at </span>
                {person?.company}
              </p>
              <p></p>
              <div className="icons flex justify-center my-1 text-zinc-50 text-3xl font-semibold mx-auto">
                <article className="flex gap-2">
                  <a
                    hidden={!person?.website}
                    href={person?.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe />
                  </a>
                  <a
                    hidden={!person?.social?.youtube}
                    href="https://wfe4ry5u6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    hidden={!person?.social?.twitter}
                    href="https://3rt45rytu6i78o"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    hidden={!person?.social?.instagram}
                    href="https://dwfegrt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    hidden={!person?.social?.linkedin}
                    href="https://dwfegrht"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    hidden={!person?.social?.facebook}
                    href="https://wdfegrhtjyku"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                </article>
              </div>
            </div>
            <div className="profile-about  mt-4 py-2">
              <article
                hidden={!person?.bio}
                className="bios border-2 px-2 py-2"
              >
                <h2 className="text-cyan-500 text-3xl font-semibold text-center">
                  {person?.user?.name}s Bio
                </h2>
                <p className="text-center text-3xl font-semibold py-4">
                  {person?.bio}
                </p>
              </article>
              <article className="border-2">
                <h2 className="text-cyan-500 text-3xl text-center font-bold">
                  Skill Set
                </h2>
                <div className="skills text-gray-800 py-5  flex justify-between align-middle w-4/6 mx-auto">
                  {person?.skills &&
                    person?.skills.map((e) => (
                      <div
                        key={crypto.randomUUID()}
                        className="p-1 flex py-2 text-xl mx-auto align-middle"
                      >
                        <FaCheck className="text-3xl py-1" /> {e}
                      </div>
                    ))}

                  {/* <div className="p-1 flex py-2 text-xl align-middle">
                    <FaCheck className="text-3xl py-1" /> NestJS
                  </div> */}
                </div>
              </article>
            </div>
            <section className="flex gap-4 py-4 align-middle justify-between">
              <div className="profile-exp flex-auto border-2 bg-white p-2">
                <h2 className="text-cyan-500 text-3xl font-semibold">
                  Experience
                </h2>
                {/* {person?.experience && ( */}
                <div hidden={person?.experience ? false : true}>
                  <h4>No experience credentials</h4>
                </div>
                {/* )} */}

                <div hidden={person?.experience ? true : false}>
                  {person?.experience &&
                    person?.experience.map((e) => (
                      <div className="border-2 my-2" key={crypto.randomUUID()}>
                        <h3 className="text-dark">Najot Ta'lim</h3>
                        <p>9/5/2022 - Now</p>
                        <p>
                          <strong>Position: </strong> Frontend Mentor
                        </p>
                        <p>
                          <strong>Location: </strong> Toshkent
                        </p>
                        <p>
                          <strong>Description: </strong> Sharing knowledge and
                          experience with beginners.
                        </p>
                      </div>
                    ))}
                  {/* <h3 className="text-dark">Najot Ta'lim</h3>
                  <p>9/5/2022 - Now</p>
                  <p>
                    <strong>Position: </strong> Frontend Mentor
                  </p>
                  <p>
                    <strong>Location: </strong> Toshkent
                  </p>
                  <p>
                    <strong>Description: </strong> Sharing knowledge and
                    experience with beginners.
                  </p> */}
                </div>
              </div>
              <div className="profile-edu w-4/12 border-2 flex-initial bg-white p-2 ">
                <h2 className="text-cyan-500 text-3xl font-semibold ">
                  Education
                </h2>
                <div hidden={!person?.education ? true : false}>
                  <h4>No education credentials</h4>
                </div>
                <div hidden={!person?.education ? true : false}></div>
                {}
              </div>
            </section>
            <div
              hidden={person?.githubusername ? false : true}
              className="profile-github"
            >
              <h2 className="text-cyan-500 my-1 text-3xl font-semibold">
                Github Repos
              </h2>
              <div className="repos flex justify-between align-middle border-2 bg-white p-1 my-1">
                {/* {
                  <div>
                    {person?.githubusername &&
                      person?.githubusername.map((e) => (
                        <div>
                          <div>
                            <h4 className="flex-col justify-center  text-cyan-500 font-medium py-10">
                              <a
                                className="flex-auto"
                                href="https://github.com/egamberdiyevalisherjon/nt-86-5-10"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                nt-86-5-10
                              </a>
                            </h4>
                          </div>
                          <div>
                            <ul>
                              <Space className="flex-col" size={[0, 8]} wrap>
                                <Tag
                                  color="cyan"
                                  className="text-center py-1 w-24"
                                >
                                  Stars: 0
                                </Tag>
                                <Tag
                                  color="magenta"
                                  className="text-center py-1 w-24"
                                >
                                  Watchers: 0
                                </Tag>
                                <Tag
                                  color="gold"
                                  className="text-center py-1 w-24"
                                >
                                  Forks: 1
                                </Tag>
                              </Space>
                            </ul>
                          </div>
                        </div>
                      ))}
                  </div>
                } */}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Profile;
