import React from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";
import Button_Light from "../Button_Light/Button_Light";

const Products = () => {

    return(
        <section className={styles.products}>
            <div className={styles.container}>
                <h2 className={styles.products__title}>This Week's Highlights</h2>
                <div className={styles.products__grid}>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className={styles.products__bottom}>
                    <Button_Light/>
                </div>
            </div>
        </section>
    )
}

export default Products;