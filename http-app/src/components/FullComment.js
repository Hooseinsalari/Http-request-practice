import React from 'react';

// style
import styles from "./FullComment.module.css"
const FullComment = () => {
    return (
        <div className={styles.container}>
            <p>name</p>
            <p>email</p>
            <p>body</p>
        </div>
    );
};

export default FullComment;