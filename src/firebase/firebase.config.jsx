import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3DZUYgFD2-aBgCFcjd5gdZXHxouFmO3w",
    authDomain: "recipe-33c7d.firebaseapp.com",
    projectId: "recipe-33c7d",
    storageBucket: "recipe-33c7d.appspot.com",
    messagingSenderId: "244836806251",
    appId: "1:244836806251:web:f1e55e49e19a77d9770b2e"
  };
console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);