import React from "react";
import { SlTrash } from "react-icons/sl";
import styles from "./ButtonDelete.module.css"

const ButtonDelete = () => {

    return (
        <button className={styles.item__delete}>
            <SlTrash/>
        </button>

    )

}

export default ButtonDelete;

// SlBag
// SlStar
// SlTrash
//SlHeart