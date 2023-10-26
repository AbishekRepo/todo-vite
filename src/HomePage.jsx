import { NavLink, Outlet } from "react-router-dom"

export const AppList = () => {
    return (
        <>
            <NavLink to='todo-app'>Todo App</NavLink>
        </>
    )
}

const navStyle = {
    minHeight: '50px',
    backgroundColor: '#333'
}

const HomePage = () => {
    return (
        <>
            <nav className="navbar">
                <NavLink className="navLink" to='/'>Home Page</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HomePage