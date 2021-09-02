import React from "react";
import "./App.css";
import Landing from "./Components/Landing";
import Privacy from "./Components/Privacy";
import Header from "./Components/Header";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8DJ588YVUII92J7EyNr7WxV_n2irwi7I",
  authDomain: "wimouse.firebaseapp.com",
  projectId: "wimouse",
  storageBucket: "wimouse.appspot.com",
  messagingSenderId: "981021399787",
  appId: "1:981021399787:web:28ee27b11e816942d0fcae",
  measurementId: "G-XBH4PJQ6GQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
        <Header></Header>
        
        <Route path="/home" exact component={Landing} />
        <Route path="/" exact component={Landing} />
        <Route path="/privacy" exact component={Privacy} />
        

        <footer>
          <h3>503 Studios</h3>
          <a href="./privacy">Privacy Policy</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
