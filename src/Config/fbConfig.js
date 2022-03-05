// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWINMcbVxTKM57Xi6KNBHeWq9SerSuFB4",
  authDomain: "handtalk-dt.firebaseapp.com",
  projectId: "handtalk-dt",
  storageBucket: "handtalk-dt.appspot.com",
  messagingSenderId: "377285403528",
  appId: "1:377285403528:web:db3f69a98d9967ffed903d",
  measurementId: "G-2J8DLHJDMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);