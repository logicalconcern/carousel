import React from 'react';
import Spinner from "react-svg-spinner";
import styles from "./index.module.css";

export default () => (
    <div className={styles.preloader}>
        <div className={styles.panel}>
            <Spinner size="60px" color="#2b73a1"/>
        </div>
    </div>
)