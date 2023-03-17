import React from "react";
import logo from "../../images/logo-black.png";
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";
import IconCart from "../IconCart/IconCart";
import IconWishlist from "../IconWishlist/IconWishlist";


const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.header__wrapper}>
                    <a href="/"><img src={logo} alt="logo"/></a>
                    <div className={style.navbar}>
                        <ul>
                            <li>
                                <NavLink to="/wishlist"><IconWishlist variant="IconWishlist"/></NavLink>
                            </li>
                            <li>
                               <NavLink to="/"><IconCart variant="IconCart"/></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

