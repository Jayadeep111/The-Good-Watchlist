// import "./css/App.css";
// import Favorites from "./pages/Favorites";
// import Home from "./pages/Home";
// import {Routes, Route} from "react-router-dom"
// import { MovieProvider } from "./contexts/MovieContext";
// import NavBar from "./components/NavBar";
// import { ThemeProvider } from "./contexts/ThemeContext";
// function App() {


//   return (
//     <ThemeProvider>
//     <MovieProvider>          
//       <NavBar />
//     <main className= "main-content">
//       <Routes>
//          <Route path="/" element={<Home />}/>
//          <Route path="/favorites" element={<Favorites />}/>

//       </Routes>
//     </main>
//     </MovieProvider>
//  </ThemeProvider>
//   );
// }


// export default App






// src/App.jsx

// import "./css/App.css";
// import Favorites from "./pages/Favorites";
// import Home from "./pages/Home";
// import Login from "./pages/Login"; // <-- Import Login
// import Signup from "./pages/Signup"; // <-- Import Signup
// import { Routes, Route } from "react-router-dom";
// import { MovieProvider } from "./contexts/MovieContext";
// import NavBar from "./components/NavBar";
// import { ThemeProvider } from "./contexts/ThemeContext";

// function App() {
//   return (
//     <ThemeProvider>
//       <MovieProvider>
//         <NavBar />
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/favorites" element={<Favorites />} />
//             <Route path="/login" element={<Login />} /> {/* <-- Add this */}
//             <Route path="/signup" element={<Signup />} /> {/* <-- Add this */}
//           </Routes>
//         </main>
//       </MovieProvider>
//     </ThemeProvider>
//   );
// }

// export default App;





// src/App.jsx

import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext"; // <-- 1. Import AuthProvider

function App() {
  return (
    <ThemeProvider>
      <AuthProvider> {/* <-- 2. Wrap everything */}
        <MovieProvider>
          <NavBar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
        </MovieProvider>
      </AuthProvider> {/* <-- 3. Close the wrap */}
    </ThemeProvider>
  );
}

export default App;