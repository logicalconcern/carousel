import React from "react";
import styles from "./index.css";

export default ({ children }) => (
    <header className={styles.header}>
        <h1>{children}</h1>
    </header>
);