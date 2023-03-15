import React from "react";
import styles from "./Button.module.css"
import IconDelete from "../IconDelete/IconDelete";
import IconAddToWishlist from "../IconAddToWishlist/IconAddToWishlist";

const Button = (props) => {
    const {variant} = props;


        switch (variant) {
            case "styleDark":
                return (<a href="/" className={`${styles.btn} ${styles.btnDark}`}>Shop now</a>);
            case  "styleLight":
                return (<a href="/" className={`${styles.btn} ${styles.btnOutlinePrimary}`}>Shop Now</a>);
            case "IconDelete":
                return (<IconDelete/>);
            case "IconAddToWishlist":
                return (<IconAddToWishlist/>);
            default:
                return (<a href="/" className={styles.btn}>Shop Now</a>);
        }




}

export default Button;