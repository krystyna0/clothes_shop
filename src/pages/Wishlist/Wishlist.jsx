import styles from "./Wishlist.module.css";
import WishlistItem from "../../components/WishlistItem/WishlistItem";
import {useSelector} from "react-redux";


const Wishlist = () => {

    const {products} = useSelector(store => store.state);

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