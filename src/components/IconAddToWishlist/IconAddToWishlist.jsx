import React from "react";
import style from "./IconAddToWishlist.module.css"
import { SlHeart } from "react-icons/sl";

const IconAddToWishlist = () => {

    return(
        <button className={style.add__to__wishlist}>
            <SlHeart/>
        </button>
    )
}

export default IconAddToWishlist;