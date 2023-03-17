import {useContext} from "react";
import {ShopContext} from "../../context/WishlistContext";
import { SlTrash } from "react-icons/sl";
import styles from "./IconDeleteFromWishlist.module.css"

const IconDeleteFromWishlist = ({product}) => {
    const {id} = product;

    const {removeFromWishlist} = useContext(ShopContext);

    const handleClick = () => {
        removeFromWishlist(id);
    }

    return (
        <button onClick={handleClick} className={styles.item__delete}>
            <SlTrash/>
        </button>

    )

}

export default IconDeleteFromWishlist;
