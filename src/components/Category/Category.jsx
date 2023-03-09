import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import styles from "./Category.module.css"

const Category = () => {

    return(
        <section className={styles.category}>
            <div className={styles.container}>
                <h2 className={styles.category__title}>This Season Collection</h2>
                <div className={styles.category__grid}>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                </div>
            </div>
        </section>
    )
}

export default Category;