import React from "react";
import styles from "./Product.module.css";
import Button from "../Button/Button";


const Product = ({product}) => {
    const {name, price, image} = product;

    const handleClick = () => {
        console.log("Click")
    }
    return (
        <div className={styles.product}>
            <div className={styles.products__image}>
                <a href="/" className={styles.products__imageBlock}>
                    <img src={image} alt={name}/>
                </a>
                <Button onClick={handleClick} variant="IconAddToWishlist"/>
            </div>
            <div className={styles.product__body}>
                <h3>
                    <a href="/">{name}</a>
                </h3>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Product;