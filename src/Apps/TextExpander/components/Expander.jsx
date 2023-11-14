import React, { useState } from "react";

const Expander = ({
  children,
  colappseWords = 15,
  expandText = "show more",
  collapseText = "show less",
}) => {
  const [isExpand, setIsExpand] = useState(false);

  const expanderStyle = {
    marginBottom: "10px",
    backgroundColor: isExpand ? "#2E2E2E" : "#30363d",
    paddingBlock: "20px",
    borderRadius: "15px",
    paddingLeft: "10px",
    paddingRight: "10px",
    transition: "background-color 0.3s ease-in-out",
  };

  const ButtonStyle = {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "10px",
    margin: "8px 0",
    cursor: "pointer",
    borderRadius: "4px",
    transition: "background-color 0.7s ease-in-out",
  };

  return (
    <div style={expanderStyle}>
      {isExpand
        ? children
        : children.split(" ").slice(0, colappseWords).join(" ") + ".."}
      <span>
        <button
          onClick={() => setIsExpand((prev) => !prev)}
          style={ButtonStyle}
        >
          {isExpand ? collapseText : expandText}
        </button>
      </span>
    </div>
  );
};

export default Expander;
