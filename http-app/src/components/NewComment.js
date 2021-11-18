import React, { useState } from 'react';

// style
import styles from "./NewComment.module.css"

const NewComment = ({onAddPost}) => {
    const [comment, setComment] = useState({
        name: "",
        email: "",
        content: ""
    });

    const changeHandler = (event) => {
        // console.log(event.target.name, event.target.value)
        setComment({...comment, [event.target.name]: event.target.value})
    }

    

    return (
        <form className={styles.container}>
            <label>name</label>
            <input name="name" type="text" value={comment.name} onChange={changeHandler} />
            <br />
            <label>email</label>
            <input name="email" type="text" value={comment.email} onChange={changeHandler} />
            <br/>
            <label>body</label>
            <textarea name="content" type="textarea" value={comment.content} onChange={changeHandler} />
            <br />
            <button onClick={() => onAddPost(comment)}>post data</button>
        </form>
    );
};

export default NewComment;