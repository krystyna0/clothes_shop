import React from "react";
import Glasses from "../../images/banner-20.jpg";
import styles from "./Category_Item.module.css"
import Button_Dark from "../Button_Dark/Button_Dark";

const Category_Item = () => {

    return(
        <div className={styles.category__item}>
            <img src={Glasses} alt={Glasses}/>
            <div className={styles.category__overlay}>
                <Button_Dark/>
            </div>
        </div>
    )
}

export default Category_Item;