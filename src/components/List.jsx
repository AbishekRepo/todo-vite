import React from "react";

function List({ list, close }) {
  return (
    <div className="list-container">
      <ul>
        <li>{list.text}</li>
        <button onClick={() => close(list.id)}>X</button>
      </ul>
    </div>
  );
}

export default List;
