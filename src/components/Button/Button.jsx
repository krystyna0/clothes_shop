import React from "react";
import styles from "./Button.module.css"

const Button = (props) => {
    const {variant} = props;


        switch (variant) {
            case "styleDark":
                return (<a href="#" className={`${styles.btn} ${styles.btnDark}`}>Shop now</a>);
                break;
            case  "styleLight":
                return (<a href="#" className={`${styles.btn} ${styles.btnOutlinePrimary}`}>Shop Now</a>);
                break;
            default:
                return (<a href="#" className={styles.btn}>Shop Now</a>);
        }




}

export default Button;