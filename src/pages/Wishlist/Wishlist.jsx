import {useContext } from "react";
import {ShopContext} from "../../context/WishlistContext";
import styles from "./Wishlist.module.css";
import WishlistItem from "../../components/WishlistItem/WishlistItem";


const Wishlist = () => {

    const {products} = useContext(ShopContext);


    return(
        <div className={styles.container}>
            <h2 className={styles.wishlist__title}>Wishlist</h2>
            <div>
                {products && products.map((product) => (
                    <WishlistItem product={product} key={product.id}/>
                ))}

            </div>
        </div>
    )
}

export default Wishlist;