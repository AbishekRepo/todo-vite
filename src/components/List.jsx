import React from "react";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

function List({ list, close }) {
  return (
    <div className="list-container">
      <ul>
        <li>{list.text}</li>
        <button>
          <FaPencilAlt />
        </button>
        <button onClick={() => close(list.id)}>
          <FaTimes />
        </button>
      </ul>
    </div>
  );
}

export default List;
