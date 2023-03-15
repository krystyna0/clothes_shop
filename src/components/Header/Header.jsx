import React from "react";
import logo from "../../images/logo-black.png";
import style from "./Header.module.css"
import { SlStar } from "react-icons/sl";
import { SlBag } from "react-icons/sl";
import {NavLink} from "react-router-dom";


const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.header__wrapper}>
                    <a href="#"><img src={logo} alt="logo"/></a>
                    <div className={style.navbar}>
                        <ul>
                            <li>
                                <a href="#" className={style.navbar__icon}>
                                    <NavLink to="/wishlist"><SlStar/></NavLink>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={style.navbar__icon}>
                                    <SlBag/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

