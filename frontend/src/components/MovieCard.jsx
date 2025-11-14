// import "../css/MovieCard.css"
// import { useMovieContext } from "../contexts/MovieContext"
// function MovieCard({movie}){
//     const{isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
//     const favorite = isFavorite(movie.id)
//     function onFavoriteClick(e){
//         e.preventDefault()
//         if(favorite) removeFromFavorites(movie.id)
//             else addToFavorites(movie)
//     }
//     return <div className="movie-card">
//         <div className="movie-poster">
//             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
//             <div className="movie-overlay">
//                 <button className={`favorite-btn ${favorite ? "active": ""}`} onClick={onFavoriteClick}>
//                     ♥
//                 </button>
//             </div>
//         </div>
//         <div className="movie-info">
//               <h3>{movie.title}</h3>
//               <p>{movie.release_date?.split("-")[0]}</p>
//         </div>
//     </div>
// }

// export default MovieCard









// src/components/MovieCard.jsx

import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import { useAuth } from "../contexts/AuthContext"; // 1. Import useAuth
import { useNavigate } from "react-router-dom"; // 2. Import useNavigate

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const { currentUser } = useAuth(); // 3. Get the current user
  const navigate = useNavigate(); // 4. Get the navigate function

  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();

    // 5. Check for user
    if (!currentUser) {
      // If no user, redirect to login page
      alert("Please log in to add movies to your watchlist.");
      navigate("/login");
      return;
    }

    // If user exists, run the normal logic
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;