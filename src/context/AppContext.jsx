import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [list, setList] = useState(getStoredItem() || []);
  const [form, setForm] = useState("");

  const uniqueId = uuidv4();

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  function getStoredItem() {
    const storedItem = localStorage.getItem("list");
    return storedItem ? JSON.parse(storedItem) : [];
  }

  function handleSumbit(e) {
    e.preventDefault();
    const newText = {
      id: uniqueId,
      text: form,
    };
    if (newText.text) {
      setList([...list, newText]);
    }
  }

  function updateText(id, newText) {
    const updatedData = list.map((item) => {
      return item.id == id ? { ...item, text: newText } : item;
    });
    setList(updatedData);
  }

  function close(id) {
    let newData = list.filter((item) => item.id !== id);
    setList(newData);
  }

  const contextValue = {
    list,
    form,
    setForm,
    handleSumbit,
    updateText,
    close,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
