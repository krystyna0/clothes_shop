import React from "react";
import image from "../../images/product-07.jpg"
import styles from "./WishlistItem.module.css"
import Button from "../Button/Button";
import ButtonDelete from "../ButtonDelete/ButtonDelete";



const WishlistItem = () => {

    return(
         <div className={styles.item}>
             <div className={styles.item__content}>
                 <ButtonDelete/>
                 <div className={styles.item__body}>
                     <img src={image} alt="Flowers cotton dress" className={styles.item__image}/>
                     <div>
                         <p className={styles.item__title}>Flowers cotton dress</p>
                         <p className={styles.item__price}>$29.00</p>
                     </div>
                 </div>
             </div>
             <div className={styles.item__buttons}>
                 <Button variant="styleDark"/>

             </div>
         </div>
     )
}

export default WishlistItem;