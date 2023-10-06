import React from "react";
import Background from "../../components/ProjectsTable/ProjectsTable";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import Games from "../../components/Games/Games";

export default function Home() {
  return (
    <div className="container-lg-fluid">
      <Navbar />
      <Carousel />
      <Background />
      <Games />
    </div>
  );
}
