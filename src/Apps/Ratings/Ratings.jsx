import { useState } from "react";
import styles from "./ratings.module.scss";

const Ratings = ({ ratings = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
  }

  function handleHover(index) {
    setHover(index);
  }

  return (
    <div className={styles.ratingContainer}>
      <div className={styles.model}>
        <h5>Please rate your experience</h5>
        {Array.from({ length: ratings }, (_, index) => {
          return (
            <Star
              key={index}
              onClick={() => handleClick(index + 1)}
              isFill={hover ? hover >= index + 1 : rating >= index + 1}
              onMouseEnter={() => handleHover(index + 1)}
              onMouseLeave={() => setHover(0)}
              className="star"
            />
          );
        })}
        <span className={styles.ratingsText}>{hover || rating || 0}</span>
      </div>
    </div>
  );
};

const Star = ({ onClick, isFill, onMouseEnter, onMouseLeave }) => {
  return (
    <>
      <span
        className="empty-star"
        onClick={onClick}
        role="button"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {!isFill ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            // stroke-width="2"
            // stroke-linecap="round"
            // stroke-linejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="yellow"
            stroke="currentColor"
            // stroke-width="2"
            // stroke-linecap="round"
            // stroke-linejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        )}
      </span>

      <span className="not-empty-star star"></span>
    </>
  );
};

export default Ratings;
