import React, { useEffect, useState } from "react";

// style
import styles from "./FullComment.module.css";

// axios
import axios from "axios";
const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState([]);

  
  const style = {
    color: "#444",
    padding: "10px",
    backgroundColor: "#fefefe",
    margin: "15px",
  };

  const deleteHandler = () => {
    axios.delete(`http://localhost:3001/comments/${commentId}`)
    .then((response) => console.log(response.data))
  }
  
  useEffect(() => {
    if (commentId) {
      axios
      .get(`http://localhost:3001/comments/${commentId}`)
      .then((response) => setComment(response.data))
      .catch((error) => console.log(error));
    }
  }, [commentId]);
  
 
  if (!commentId) {
    return <p style={style}>Please select a comment !</p>;
  }

  

  if (comment) {
    return (
      <div className={styles.container}>
        <p>name: {comment.name}</p>
        <p>email: {comment.email}</p>
        <p>body: {comment.body}</p>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    );
  }
};

export default FullComment;