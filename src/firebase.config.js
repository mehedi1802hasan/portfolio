// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNqlyPDtyyEkqOSwISHWg3m2Yudke-P7A",
  authDomain: "portfolio-3788c.firebaseapp.com",
  projectId: "portfolio-3788c",
  storageBucket: "portfolio-3788c.appspot.com",
  messagingSenderId: "783019597954",
  appId: "1:783019597954:web:7c03bf4f7eee3a3fa5d49b",
  measurementId: "G-NYJ7S9PY0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;