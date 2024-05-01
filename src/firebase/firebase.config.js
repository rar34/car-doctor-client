// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBq110lkNw2buH4am4Sv7o3ZjB-_3_M2c0",
//   authDomain: "cars-doctor-22e55.firebaseapp.com",
//   projectId: "cars-doctor-22e55",
//   storageBucket: "cars-doctor-22e55.appspot.com",
//   messagingSenderId: "37544619311",
//   appId: "1:37544619311:web:f3dc9bde960c0c0bc385da"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;