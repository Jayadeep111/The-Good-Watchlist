import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./contexts/ThemeContext";
function App() {


  return (
    <ThemeProvider>
    <MovieProvider>          
      <NavBar />
    <main className= "main-content">
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
    </MovieProvider>
 </ThemeProvider>
  );
}


export default App
