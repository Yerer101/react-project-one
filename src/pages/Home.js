import React from "react";
import "../css/w3.css";
import Topnav from "../component/Topnav/Topnav";
import Register from "../component/Register/Register";
// import Top from "../component/Top/Top"
// import LeftNav from "../component/LeftNav/LeftNav";

export const Home = () => {
  return (
    <div>
      <div>
        <Topnav />
      </div>
      <div>
        <Register />
      </div>
    </div>
  );
};
