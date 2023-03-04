import React from "react";
import styles from "./Button_Light.module.css"

const Button_Light = () => {

    return(
        <a href="#" className={`${styles.btn} ${styles.btnOutlinePrimary}`}>Shop Now</a>
    )
}

export default Button_Light;