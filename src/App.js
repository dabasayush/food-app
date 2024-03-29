import React from "react";
import ReactDOM from "react-dom/client";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from "./components/Header";
import Body from "./components/Body";
import './App.css';

const App = () => {
    return(
        <div className="app">
            < Header />
            <Body />
        </div>
    )
}

export default App