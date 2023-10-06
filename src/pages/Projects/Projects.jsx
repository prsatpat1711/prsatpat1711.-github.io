import React from "react";
import Background from "../../components/ProjectsTable/ProjectsTable";
import Navbar from "../../components/Navbar/Navbar";

export default function () {
  return (
    <div className="container-lg-fluid">
      <Navbar />
      <div className="mt-5 pt-2">
        <Background />
      </div>
    </div>
  );
}
