import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import CreateProfile from "./Pages/CreateProfile";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./components/Nav/Navbar";
import Developers from "./Pages/Developers";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import ProfileEdit from "./Pages/ProfileEdit";
import AddExp from "./Pages/AddExp";
import AddEdu from "./Pages/AddEdu";
import Page404 from "./Pages/Page404";
import Posts from "./Pages/Posts";
import Comment from "./Pages/Comment";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profiles" element={<Developers />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profileedit" element={<ProfileEdit />} />
        <Route path="/education" element={<AddEdu />} />
        <Route path="/expirience" element={<AddExp />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/create" element={<CreateProfile />} />
        <Route path="/posts/:id" element={<Comment />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
