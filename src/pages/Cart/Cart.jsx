import React from "react";
import style from "./Cart.module.css"
import CartItem from "../../components/CartItem/CartItem";
import CartSummary from "../../components/CartSummary/CartSummary";

const Cart = () => {

    return(
        <div>
        <h1 className={style.cart__title}>Shopping Cart</h1>
            <div className={style.container}>
                <div className={style.cart__grid}>
                    <div className={style.cart__list}>
                        <CartItem/>
                    </div>
                    <CartSummary/>
                </div>
            </div>
        </div>

    )
}

export default Cart;