import React from "react";
import styles from "./Button.module.css"
import IconDeleteFromWishlist from "../IconDeleteFromWishlist/IconDeleteFromWishlist";
import IconAddToWishlist from "../IconAddToWishlist/IconAddToWishlist";
import IconCart from "../IconCart/IconCart";
import IconWishlist from "../IconWishlist/IconWishlist";
import IconDeleteFromCart from "../IconDeleteFromCart/IconDeleteFromCart";

const Button = (props) => {
    const {variant, product} = props;


        switch (variant) {
            case "styleDark":
                return (<button className={`${styles.btn} ${styles.btnDark}`}>Shop now</button>);
            case  "styleLight":
                return (<button className={`${styles.btn} ${styles.btnOutlinePrimary}`}>Shop Now</button>);
            case "IconDeleteFromWishlist":
                return (<IconDeleteFromWishlist product={product}/>);
            case "IconAddToWishlist":
                return (<IconAddToWishlist product={product}/>);
            case "IconWishlist":
                return (<IconWishlist/>);
            case "IconCart":
                return (<IconCart/>);
            case "IconDeleteFromCart":
                return (<IconDeleteFromCart/>);
            case "CheckOut":
                return (<button className={`${styles.btn} ${styles.btnDark} ${styles.btnFullWidth}`}>Check Out</button>)
            default:
                return (<div>blank</div>);
        }




}

export default Button;