import React from "react";
import styles from "./index.module.css";

export default ({ children }) => (
    <header className={styles.header}>
        <h1>{children}</h1>
    </header>
);