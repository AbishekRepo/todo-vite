import { useRef } from "react";

const FocusManagement = () => {
  const emailref = useRef(null);
  const passwordRef = useRef(null);

  const handleFocusButtonClick = (e) => {
    e.preventDefault();
    console.log("button clicked");
    console.log(emailref);
    emailref.current?.focus();
  };

  const handleEmailKeyPress = (e) => {
    if (e.key === "Enter") {
      passwordRef.current?.focus();
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="name"
          id="email"
          ref={emailref}
          onKeyUp={handleEmailKeyPress}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          ref={passwordRef}
        />
      </div>
      <button onClick={handleFocusButtonClick}>sumbit</button>
    </form>
  );
};

export default FocusManagement;
