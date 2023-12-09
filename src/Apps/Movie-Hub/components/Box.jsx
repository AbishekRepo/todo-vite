import React from "react";

const Box = ({ children }) => {
  //   const isMobile = window.innerWidth <= 600;

  const boxContainer = {
    flex: 1,
    padding: "16px",
    backgroundColor: "#30363d",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "16px",
    height: "70vh",
    overflowY: "auto",
  };

  return (
    <div style={boxContainer} className="scrollable-list">
      {children}
    </div>
  );
};

export default Box;
