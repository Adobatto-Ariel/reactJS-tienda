import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDqeq0N4xfhi2Gnlr12VY1bau030H-hoW4",
    authDomain: "mvkydex-app.firebaseapp.com",
    projectId: "mvkydex-app",
    storageBucket: "mvkydex-app.appspot.com",
    messagingSenderId: "866364302514",
    appId: "1:866364302514:web:eac0e4ac5073b46ea155ab",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
