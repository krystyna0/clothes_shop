import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {

    return(
        <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.footer__wrapper}>
                <p className={styles.footer__copyright}>
                    © SHOP
                </p>
            </div>
        </div>
        </footer>
    )
}

export default Footer;