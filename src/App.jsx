import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";



function App() {

    return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/wishlist' element={<Wishlist/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
     </div>
  );
}

export default App;

