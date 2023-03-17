import React from "react";
import {SlBag} from "react-icons/sl";
import styles from "./IconCart.module.css"

const IconCart = () => {

    return (
        <button className={styles.navbar__icon}>
            <SlBag/>
        </button>

    )

}

export default IconCart;