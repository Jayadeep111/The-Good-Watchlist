// import "../css/Favorites.css"
// import { useMovieContext } from "../contexts/MovieContext"
// import MovieCard from "../components/MovieCard"

// function Favorites() {
//     const { favorites } = useMovieContext();
//     if (favorites) {
//         return (
//             <div className="favorites">
//                 <h2>Your Watchlist</h2>
//                 <div className="movies-grid">
//                     {favorites.map(
//                         (movie) =>
//                         (
//                             <MovieCard movie={movie} key={movie.id} />
//                         )
//                     )}
//                 </div>
//             </div>
//         );
//     }
//     return <div className="favorites-empty">
//         <h2>No Watchlist Yet</h2>
//         <p>Start adding movies to your watchlist and they will appear here </p>
//     </div>

// }

// export default Favorites




// Favorites.jsx (Corrected)
import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites(){
    const {favorites} = useMovieContext();
    
    // Check the length of the array
    if(favorites.length > 0){ 
        return (
            <div className="favorites">
                <h2>Your Watchlist</h2>
                <div className="movies-grid">
                    {favorites.map(
                        (movie) =>
                        (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                    )}
                </div>
            </div>
        );
    }

    // This will now correctly render when the array is empty
    return <div className="favorites-empty">
        <h2>No Watchlist Yet</h2>
        <p>Start adding movies to your watchlist and they will appear here </p>
    </div>
}

export default Favorites