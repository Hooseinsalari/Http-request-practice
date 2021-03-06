import React, { useState } from 'react';

// http
import { postAllComments } from '../services/addNewCommentsService';
import { getAllComments } from '../services/getAllCommentsService';

// style
import styles from "./NewComment.module.css"

const NewComment = ({setComments}) => {
    const [comment, setComment] = useState({
        name: "",
        email: "",
        content: ""
    });

    const changeHandler = (event) => {
        // console.log(event.target.name, event.target.value)
        setComment({...comment, [event.target.name]: event.target.value})
    }

    const postHandler = () => {
        postAllComments({...comment,postId:10})
        .then((response) => getAllComments)
        .then((response) => setComments(response.data))
        .catch((error) => console.log(error))
        
    }

    return (
        <form autoComplete="off" className={styles.container}>
            <label>name</label>
            <input name="name" type="text" value={comment.name} onChange={changeHandler} />
            <br />
            <label>email</label>
            <input name="email" type="text" value={comment.email} onChange={changeHandler} />
            <br/>
            <label>body</label>
            <textarea name="content" type="textarea" value={comment.content} onChange={changeHandler} />
            <br />
            <button onClick={postHandler}>post data</button>
        </form>
    );
};

export default NewComment;