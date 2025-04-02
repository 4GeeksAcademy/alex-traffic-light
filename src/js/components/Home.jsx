import React, { useState } from "react";
import Light from "./Light";

const Home = () => {
  const [activeLight, setActiveLight] = useState(null); 

  const handleLightClick = (color) => {
    setActiveLight(color); 
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center">
      <div className="traffic-light-post bg-black" style={{ width: "50px", height: "200px" }}></div>
      <div
        className="traffic-light-body bg-black d-flex flex-column align-items-center justify-content-evenly rounded-4"
        style={{ width: "300px", height: "500px" }}
      >
        <Light color="danger" activeLight={activeLight} onLightClick={handleLightClick} />
        <Light color="warning" activeLight={activeLight} onLightClick={handleLightClick} />
        <Light color="success" activeLight={activeLight} onLightClick={handleLightClick} />
      </div>
    </div>
  );
};

export default Home;