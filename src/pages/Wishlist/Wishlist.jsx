import React from "react";
import styles from "./Wishlist.module.css";
import WishlistItem from "../../components/WishlistItem/WishlistItem";

const Wishlist = () => {

    return(
        <div className={styles.container}>
            <h2 className={styles.wishlist__title}>Wishlist</h2>
            <div>
                <WishlistItem/>
                <WishlistItem/>
            </div>
        </div>
    )
}

export default Wishlist;