
import styles from "./WishlistItem.module.css"
import Button from "../Button/Button";


const WishlistItem = ({product}) => {
    const {name, price, image} = product;


    return(
         <div className={styles.item}>
             <div className={styles.item__content}>
                 <Button product={product} variant="IconDeleteFromWishlist"/>
                 <div className={styles.item__body}>
                     <img src={image} alt={name} className={styles.item__image}/>
                     <div>
                         <p className={styles.item__title}>{name}</p>
                         <p className={styles.item__price}>{price}</p>
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