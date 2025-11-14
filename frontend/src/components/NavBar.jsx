
// src/components/NavBar.jsx

// import { Link } from "react-router-dom";
// import { useTheme } from "../contexts/ThemeContext";
// import "../css/Navbar.css";

// function NavBar() {
//   const { toggleTheme, theme } = useTheme();

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <Link to="/">The Good Watchlist</Link>
//       </div>
//       <div className="navbar-links">
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/favorites" className="nav-link">Watchlist</Link>

//         {/* --- Add these new links --- */}
//         <Link to="/login" className="nav-link">Login</Link>
//         <Link to="/signup" className="nav-link auth-link">Sign Up</Link>
//         {/* -------------------------- */}
        
//         <button className="theme-toggle" onClick={toggleTheme}>
//           {theme === "dark" ? "☀️" : "🌙"}
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;






// src/components/NavBar.jsx

import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext"; // 1. Import useAuth
import { signOut } from "firebase/auth"; // 2. Import signOut
import { auth } from "../firebase/config"; // 3. Import auth
import "../css/Navbar.css";

function NavBar() {
  const { toggleTheme, theme } = useTheme();
  const { currentUser } = useAuth(); // 4. Get the current user
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // After logout, redirect to the login page
      navigate("/login"); 
    } catch (err) {
      console.error("Failed to log out", err);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">The Good Watchlist</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Watchlist</Link>

        {/* 5. Add conditional logic */}
        {currentUser ? (
          // If user is logged in
          <button onClick={handleLogout} className="nav-link auth-link-logout">
            Logout
          </button>
        ) : (
          // If user is logged out
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link auth-link">Sign Up</Link>
          </>
        )}

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;