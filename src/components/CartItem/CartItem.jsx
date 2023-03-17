import React from "react";
import style from "./CartItem.module.css";
import Button from "../Button/Button";
import img from "../../images/product-04.jpg";

const CartItem = () => {

    return(
        <div className={style.item}>
            <div className={style.item__content}>
                <Button variant="IconDeleteFromCart"/>
                <img className={style.item__image} src={img} alt="img"/>
                <div>
                    <p className={style.item__category}>Dress</p>
                    <p className={style.item__name}>Oversize cotton sweatshirt</p>
                </div>
            </div>
            <p>750</p>
        </div>
    )
}

export default CartItem;