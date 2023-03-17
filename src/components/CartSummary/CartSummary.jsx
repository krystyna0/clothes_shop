import React from "react";
import style from "./CartSummary.module.css";
import Button from "../Button/Button";

const CartSummary = () => {

    return(
        <div>
            <h4 className={style.summary__title}>Summary</h4>
            <div className={style.summary__body}>
                <div className={style.summary__line}>
                    <div>Total</div>
                    <div>$2020.00</div>
                </div>
            </div>
            <Button variant="CheckOut"/>
        </div>
    )
}

export default CartSummary;