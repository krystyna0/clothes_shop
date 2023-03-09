import React from "react";
import styles from "./Banner.module.css";
import banner from "../../images/image-home-07.jpg";
import Button from "../Button/Button";

const Banner = () => {

    return(
        <section className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.banner__wrapper}>
                    <img src={banner} alt="banner" />
                    <div className={styles.banner__overlay}>
                        <div>
                            <h1 className={styles.banner__title}>Waffle Hooded Coat</h1>
                            <Button variant="styleDark"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;