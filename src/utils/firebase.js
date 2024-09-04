// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJbN5__BNTOhJXdtaiCTP0lf-lG2Z4xnY",
  authDomain: "netflix-gpt-109b8.firebaseapp.com",
  projectId: "netflix-gpt-109b8",
  storageBucket: "netflix-gpt-109b8.appspot.com",
  messagingSenderId: "912791018871",
  appId: "1:912791018871:web:6270314bcd49dea5679572",
  measurementId: "G-DJ0V0B9JZV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
