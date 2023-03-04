import React from "react";
import image from "../../images/product-01.jpg";
import styles from "./Product.module.css"
import Add_To_Wishlist from "../Add_To_Wishlist/Add_To_Wishlist";

const Product = () => {

    return (
        <div className={styles.product}>
            <div className={styles.products__image}>
                <a href="#" className={styles.products__imageBlock}>
                    <img src={image} alt="product"/>
                </a>
            </div>
            <div className={styles.product__body}>
                <h3>
                    <a href="#">Hoodie with pocket</a>
                </h3>
                <p>$79.00</p>
            </div>
        </div>
    )
}

export default Product;