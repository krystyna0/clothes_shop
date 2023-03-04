import React from "react";
import Category_Item from "../Category_Item/Category_Item";
import styles from "./Category.module.css"

const Category = () => {

    return(
        <section className={styles.category}>
            <div className={styles.container}>
                <h2 className={styles.category__title}>This Season Collection</h2>
                <div className={styles.category__grid}>
                    <Category_Item/>
                    <Category_Item/>
                    <Category_Item/>
                </div>
            </div>
        </section>
    )
}

export default Category;