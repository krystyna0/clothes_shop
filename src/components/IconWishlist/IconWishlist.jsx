import React from "react";
import {SlStar} from "react-icons/sl";
import styles from "./IconWishlist.module.css"

const IconWishlist = () => {

    return (
        <button className={styles.navbar__icon}>
            <SlStar/>
        </button>

    )

}

export default IconWishlist;