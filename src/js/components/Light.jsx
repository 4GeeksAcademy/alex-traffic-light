import React from "react";
import "../../styles/light-shadow.css";

const Light = ({ color, activeLight, onLightClick }) => {
  const handleClick = () => {
    onLightClick(color); 
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-${color} ${activeLight === color ? "light-shadow" : ""}`}
      style={{ width: "150px", height: "150px", borderRadius: "50%" }}
    ></div>
  );
};

export default Light;