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

  useEffect(() => {
    if (commentId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
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
      </div>
    );
  }
};

export default FullComment;