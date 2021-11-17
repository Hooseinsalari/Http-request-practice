import React from 'react';

// styles
import styles from "./Comment.module.css";

const Comment = ({name, email}) => {
    return (
        <div className={styles.container}>
            <p className={styles.name}>name: {name}</p>     
            <p className={styles.email}>email: {email}</p>
        </div>
    );
};

export default Comment;     