import {useContext} from "react";
import {ShopContext} from "../../context/WishlistContext";
import style from "./IconAddToWishlist.module.css"
import { SlHeart } from "react-icons/sl";

const IconAddToWishlist = ({product}) => {
    const {addToWishlist} = useContext(ShopContext);

    const handleClick = () => {
        addToWishlist(product);
    }

    return(
        <button onClick={handleClick} className={style.add__to__wishlist}>
            <SlHeart/>
        </button>
    )
}

export default IconAddToWishlist;