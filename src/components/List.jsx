import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

function List({ list, close }) {
  const { updateText } = useAppContext();

  function handleUpdate(id) {
    const newData = prompt("Enter updated data");
    if (newData != null && newData != "") {
      updateText(id, newData);
    }
  }

  return (
    <div className="list-container">
      <ul>
        <li>{list.text}</li>
        <button onClick={() => handleUpdate(list.id)}>
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
