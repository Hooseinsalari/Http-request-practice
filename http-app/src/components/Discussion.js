import React, { useEffect, useState } from "react";

// Components
import Comment from "./Comment";
import FullComment from "./FullComment";
import NewComment from "./NewComment";

// axios
import axios from "axios";

const Discussion = () => {
  const [comment, setComment] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComment(data.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);

  const selectHandler = (id) => {
    setSelectedId(id)
  }

  return (
    <div>
      <section className="comment">
        {comment ? (
          comment.map((data) => (
            <Comment
              key={data.id}
              name={data.name}
              email={data.email}
              onClick={() => selectHandler(data.id)}
            />
          ))
        ) : (
          <h3>Loading ...</h3>
        )}
      </section>
      <section className="fullComment">
        <FullComment commentId={selectedId} />
      </section>
      <section className="newComment">
        <NewComment />
      </section>
    </div>
  );
};

export default Discussion;
