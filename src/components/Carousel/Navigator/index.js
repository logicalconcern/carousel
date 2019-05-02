import React from "react";
import styles from "./index.module.css";

export default ({ prev, next }) => (
    <div className={styles.navigator}>
        <button className={styles.prev} onClick={prev}>Prev</button>
        <button className={styles.next} onClick={next}>Next</button>
    </div>
);

