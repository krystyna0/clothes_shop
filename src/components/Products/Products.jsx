import React from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";
import Button from "../Button/Button";
import {shopData} from "../../shopData";

const Products = () => {

    return(
        <section className={styles.products}>
            <div className={styles.container}>
                <h2 className={styles.products__title}>This Week's Highlights</h2>
                <div className={styles.products__grid}>
                    {shopData.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>
                <div className={styles.products__bottom}>
                    <Button variant="styleLight"/>
                </div>
            </div>
        </section>
    )
}

export default Products;