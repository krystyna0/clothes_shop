import React from "react";
import { SlTrash } from "react-icons/sl";
import styles from "./IconDelete.module.css"

const IconDelete = () => {

    return (
        <button className={styles.item__delete}>
            <SlTrash/>
        </button>

    )

}

export default IconDelete;
