import React from "react";
import Glasses from "../../images/banner-20.jpg";
import styles from "./CategoryItem.module.css"
import Button from "../Button/Button";

const CategoryItem = () => {

    return(
        <div className={styles.category__item}>
            <img src={Glasses} alt={Glasses}/>
            <div className={styles.category__overlay}>
                <Button variant="styleDark"/>
            </div>
        </div>
    )
}

export default CategoryItem;