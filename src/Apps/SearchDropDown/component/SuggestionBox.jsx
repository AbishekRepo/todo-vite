import { useEffect, useState, useRef } from "react";
import styles from "./suggestionbox.module.scss";

const SuggestionBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [suggestBox, setSuggestBox] = useState(false);
  const isUserTyping = useRef(true);
  const activeSuggestionRef = useRef(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      async function fetchSearchResponse() {
        try {
          const response = await fetch(
            `https://api.datamuse.com/sug?s=${inputValue}`
          );
          const data = await response.json();
          const suggestions = data.map((item) => item.word);
          setFilteredList(suggestions);
          setActiveSuggestionIndex(0);
          setSuggestBox(true);
        } catch (error) {
          console.log(error);
        }
      }

      if (inputValue.length > 2 && isUserTyping.current) {
        fetchSearchResponse();
      } else {
        setFilteredList([]);
        setSuggestBox(false);
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  useEffect(() => {
    if (activeSuggestionRef.current) {
      activeSuggestionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeSuggestionIndex]);

  function handleInputChange(e) {
    isUserTyping.current = true;
    setInputValue(e.target.value);
  }

  function handleBlur(e) {
    if (
      !e.relatedTarget ||
      !e.relatedTarget.classList.contains(styles.suggestionItem)
    ) {
      setTimeout(() => setSuggestBox(false), 100);
    }
  }

  function handleFocus() {
    if (inputValue) {
      setSuggestBox(true);
    }
  }

  function selectSuggestion(suggestion) {
    isUserTyping.current = false;
    setInputValue(suggestion);
    setSuggestBox(false);
  }

  function selectUsingKeys(e) {
    if (e.key === "ArrowDown") {
      setActiveSuggestionIndex((prev) =>
        Math.min(prev + 1, filteredList.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      setActiveSuggestionIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      if (filteredList.length > 0) {
        setInputValue(filteredList[activeSuggestionIndex]);
        setSuggestBox(false);
      }
    } else if (e.key === "Escape") {
      setSuggestBox(false);
    }
  }

  return (
    <div className={styles.suggestionBox}>
      <input
        className={styles.suggestionInput}
        type="text"
        placeholder="search here.."
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={selectUsingKeys}
        aria-autocomplete="list"
        aria-controls="suggestion-list"
        aria-activedescendant={
          suggestBox && filteredList.length > 0
            ? `suggestion-${activeSuggestionIndex}`
            : undefined
        }
      />
      {filteredList.length > 0 && suggestBox && (
        <ul
          className={styles.suggestionsList}
          id="suggestion-list"
          role="listbox"
        >
          {filteredList.map((item, index) => (
            <li
              className={`${styles.suggestionItem} ${
                index === activeSuggestionIndex
                  ? styles.suggestionItemActive
                  : ""
              }`}
              id={`suggestion-${index}`}
              key={index}
              onClick={() => selectSuggestion(item)}
              role="option"
              aria-selected={index === activeSuggestionIndex}
              ref={index === activeSuggestionIndex ? activeSuggestionRef : null}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SuggestionBox;
