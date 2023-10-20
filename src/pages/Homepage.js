import React from "react";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <div className="row">
        <div className="col text-center p-5 ">
          <h2 className="fw-bold heading h1">Library Management System</h2>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
