import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDSELqlk8bsWyMOd_1nnhqScjN9unSmBhs",
  authDomain: "fir-authorization-e60b8.firebaseapp.com",
  projectId: "fir-authorization-e60b8",
  storageBucket: "fir-authorization-e60b8.appspot.com",
  messagingSenderId: "533466250957",
  appId: "1:533466250957:web:e6246344e1fd93d651f384",
  measurementId: "G-XJH3X5VQWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export{app,auth}