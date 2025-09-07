import { useRef } from "react";

const Scroll = () => {
  const footerRef = useRef(null);

  const handleClick = () => {
    console.log("clicked", footerRef);
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <p>
        If you{" "}
        <span onClick={handleClick} style={{ cursor: "pointer" }}>
          click here
        </span>{" "}
        this will take you to footer element placed at the bottom using useRef
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </p>
      <footer ref={footerRef}>Footer element</footer>
    </div>
  );
};

export default Scroll;
