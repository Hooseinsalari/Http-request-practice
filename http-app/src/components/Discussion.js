import React, { useEffect, useState } from "react";

// Components
import Comment from "./Comment";
import FullComment from "./FullComment";
import NewComment from "./NewComment";

// axios
import axios from "axios";

const Discussion = () => {
  const [comment, setComment] = useState(null)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => setComment(response.data.slice(0,3)))
      .catch((error) => console.log(error))
  },[])

  return (
    <div>
      <section className="comment">
        {
          comment ? comment.map((data) => <Comment key={data.id} name={data.name} email={data.email} />)
            : <h3>Loading ...</h3>
        }
        {
          
        }
      </section>
      <section className="fullComment">
        <FullComment />
      </section>
      <section className="newComment">
        <NewComment />
      </section>
    </div>
  );
};

export default Discussion;
