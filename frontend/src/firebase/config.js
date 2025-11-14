// src/firebase/config.js

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAoSxf3TRVViQ5JjUzQFmDEv7HS8Gxe7TM", // Use your actual key
//   authDomain: "movie-wishlist-app-ac06f.firebaseapp.com",
//   projectId: "movie-wishlist-app-ac06f",
//   storageBucket: "movie-wishlist-app-ac06f.firebasestorage.app",
//   messagingSenderId: "449496908506",
//   appId: "1:449496908506:web:022c344e2916ccd2235be3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Export the services you'll need
// export const auth = getAuth(app);
// export const db = getFirestore(app);



// src/firebase/config.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Read the keys securely from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services you'll need
export const auth = getAuth(app);
export const db = getFirestore(app);