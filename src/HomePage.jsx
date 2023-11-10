import { NavLink, Outlet } from "react-router-dom";

export const AppList = () => {
  return (
    <div className="site-map">
      <NavLink to="todo-app">Todo App</NavLink>
      <NavLink to="ratings-app">Ratings App</NavLink>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HomePage;
