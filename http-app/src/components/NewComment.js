import React from 'react';

// style
import styles from "./NewComment.module.css"

const NewComment = () => {
    return (
        <div className={styles.container}>
            <label>name</label>
            <input />
            <br />
            <label>email</label>
            <input />
            <br/>
            <label>body</label>
            <input />
        </div>
    );
};

export default NewComment;