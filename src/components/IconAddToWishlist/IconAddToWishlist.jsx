import style from "./IconAddToWishlist.module.css"
import {SlHeart} from "react-icons/sl";
import {useDispatch} from "react-redux";
import {addToWishlist} from "../../Slices/WishlistSlice";

const IconAddToWishlist = () => {


    const dispatch = useDispatch();

    const handleAddToWishlist = (product) => {
        dispatch(addToWishlist(product));
    }


    return (
        <button onClick={handleAddToWishlist} className={style.add__to__wishlist}>
            <SlHeart/>
        </button>
    )
}

export default IconAddToWishlist;