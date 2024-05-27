import React from "react";
import { Routes, Route } from "react-router-dom";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";

import Footer from "./components/common/Footer";
import LandingPage from "./components/home/LandingPage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import FriendsPage from "./components/pages/FriendsPage";

Amplify.configure(awsExports);

const isAuth = false;
const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" exact={true} element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/friends" element={<FriendsPage />} />
    </Routes>
    {isAuth ? <Footer /> : null}
  </div>
);

export default App;
