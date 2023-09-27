// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQ5nY_lUfSDGZ0W2kvhIgX7R-XqFVvai4",
    authDomain: "simple-react-auth-e4551.firebaseapp.com",
    projectId: "simple-react-auth-e4551",
    storageBucket: "simple-react-auth-e4551.appspot.com",
    messagingSenderId: "186817248889",
    appId: "1:186817248889:web:3190a5546230ff5adf1ea8",
    measurementId: "G-VE4Z3LR8ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();