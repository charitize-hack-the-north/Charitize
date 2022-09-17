import './App.css'
import { Dashboard } from './pages/Dashboard';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZJ6zRZHp6oUIvzmse1SiyO7-huX7V5As",
  authDomain: "charitize-dd918.firebaseapp.com",
  projectId: "charitize-dd918",
  storageBucket: "charitize-dd918.appspot.com",
  messagingSenderId: "425485368574",
  appId: "1:425485368574:web:cc542d614f007d4c5f39af",
  measurementId: "G-T36THFJSWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
