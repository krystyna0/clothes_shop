// import {useContext} from "react";
// import {ShopContext} from "../../context/WishlistContext";
import {SlTrash} from "react-icons/sl";
import styles from "./IconDeleteFromWishlist.module.css"
import {useDispatch} from "react-redux";
import {removeFromWishlist} from "../../Slices/WishlistSlice";

const IconDeleteFromWishlist = (props) => {

    const dispatch = useDispatch();

    const handleRemoveFromWishlist = () => {
        dispatch(removeFromWishlist());
    }


    return (
        <button onClick={handleRemoveFromWishlist} className={styles.item__delete}>
            <SlTrash/>
        </button>

    )

}

export default IconDeleteFromWishlist;
