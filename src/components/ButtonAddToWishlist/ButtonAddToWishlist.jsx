import React from "react";
import style from "./ButtonAddToWishlist.module.css"
import { SlHeart } from "react-icons/sl";

const ButtonAddToWishlist = () => {

    return(
        <a href="/" className={style.add__to__wishlist}>
            <SlHeart/>
        </a>
    )
}

export default ButtonAddToWishlist;