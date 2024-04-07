import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Terms from "../pages/Terms";
// import Abouts from "../pages/About";
import ProfilePage from "../pages/profilePage/ProfilePage";
import CommunityPage from "../pages/CommunityPage/CommunityPage";

import {
  Home,
  Register,
  Login,
  ForgotPassword,
  ResetPassword,
  ActivateAccount,
  Post,
} from "../pages/";
import { Message } from "../components";
import { MessageContext } from "../context";

export const ALLRoutes = () => {
  const { messages } = useContext(MessageContext);

  return (
    <div className=" overflow-x-hidden dark:bg-slate-800">
      <div className="absolute top-[100px] left-1/2 z-100">
        {messages.map((msg, index) => (
          <Message
            key={index}
            index={index}
            type={msg.type}
            message={msg.text}
          />
        ))}
      </div>
      <div className="mt-[200px] md:mt-[85px]">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/question/:slug" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPassword />}
          />
          <Route path="/activate/:uid/:token" element={<ActivateAccount />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/Profile" element={<ProfilePage/>} />
          <Route path="/Community" element={<CommunityPage/>}/>
          {/* <Route path="/About" element={<Abouts />} /> */}
        </Routes>
      </div>
    </div>
  );
};
