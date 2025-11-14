// import { createContext, useState,useContext,useEffect } from "react";
// const MovieContext = createContext()


// export const useMovieContext = () => useContext(MovieContext)

// export const MovieProvider= ({children}) => {
//     const [favorites, setFavorites] = useState([])
//     useEffect(() => {
//         const storedFavs = localStorage.getItem("favorites")

//         if(storedFavs) setFavorites(JSON.parse(storedFavs))
//     }, [])

//     useEffect(() => {
//         localStorage.setItem('favorites',JSON.stringify(favorites))
//     },[favorites])

//     const addToFavorites = (movie) => {
//         setFavorites(prev => [...prev, movie])
//     }

//     const removeFromFavorites = (movieId) => {
//         setFavorites(prev => prev.filter(movie => movie.id !== movieId))
//     }

//     const isFavorite = (movieId) => {
//         return favorites.some(movie => movie.id === movieId)
//     }

//     const value = {
//         favorites,
//         addToFavorites,
//         removeFromFavorites,
//         isFavorite
//     }
//     return <MovieContext.Provider value={value}>
//         {children}
//     </MovieContext.Provider>
// }








// src/contexts/MovieContext.jsx

import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext"; // 1. Import useAuth
import { db } from "../firebase/config"; // 2. Import Firestore db
import {
  doc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  arrayRemove,
  setDoc,
} from "firebase/firestore"; // 3. Import Firestore functions

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth(); // 4. Get the logged-in user

  // This useEffect now depends on the user
  useEffect(() => {
    // If no user is logged in, clear favorites and do nothing
    if (!currentUser) {
      setFavorites([]);
      return;
    }

    setLoading(true);
    // Get the user's personal doc reference
    const userDocRef = doc(db, "watchlists", currentUser.uid);

    // Set up a real-time listener (onSnapshot)
    // This function runs every time the data changes in Firestore
    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        // If the user has a document, load their movies
        setFavorites(docSnap.data().movies || []);
      } else {
        // If it's a new user, they won't have a doc yet
        setFavorites([]);
      }
      setLoading(false);
    });

    // Cleanup the listener when the component unmounts or user changes
    return () => unsubscribe();
  }, [currentUser]); // 5. This effect re-runs when the user logs in or out

  // --- REWRITE DATABASE FUNCTIONS ---

  const addToFavorites = async (movie) => {
    if (!currentUser) return; // Safety check

    const userDocRef = doc(db, "watchlists", currentUser.uid);
    try {
      // Use setDoc with { merge: true } to create the doc if it doesn't exist
      // and add the movie to the 'movies' array using arrayUnion.
      await setDoc(
        userDocRef,
        {
          movies: arrayUnion(movie), // arrayUnion prevents duplicates
        },
        { merge: true } // This creates the doc if it's not there
      );
    } catch (err) {
      console.error("Error adding to favorites:", err);
    }
  };

  const removeFromFavorites = async (movieId) => {
    if (!currentUser) return; // Safety check

    const userDocRef = doc(db, "watchlists", currentUser.uid);

    // Find the full movie object from state, because arrayRemove needs it
    const movieToRemove = favorites.find((movie) => movie.id === movieId);
    if (!movieToRemove) return;

    try {
      // Use updateDoc to remove the movie from the 'movies' array
      await updateDoc(userDocRef, {
        movies: arrayRemove(movieToRemove),
      });
    } catch (err) {
      console.error("Error removing from favorites:", err);
    }
  };

  const isFavorite = (movieId) => {
    // This function logic doesn't need to change
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    loading, // Pass loading state in case you want to use it
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};