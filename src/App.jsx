import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";





function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>

        <Routes>
            <Route path="/" element={Home} />
        </Routes>
    </div>
  );
}

export default App;

