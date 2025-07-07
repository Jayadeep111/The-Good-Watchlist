import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

import "../css/Navbar.css"
function NavBar() {
     const { toggleTheme, theme } = useTheme();

     return <nav className="navbar">
          <div className="navbar-brand">
               <Link to="/">The Good Watchlist</Link>
          </div>
          <div className="navbar-links">
               <Link to="/" className="nav-link">Home</Link>
               <Link to="/favorites" className="nav-link">Watchlist</Link>
               {/* 🌗 Theme Toggle Button */}
               <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === "dark" ? "☀️" : "🌙"}
               </button>
          </div>
     </nav>

}

export default NavBar