import React, { useEffect, useState } from "react";

// Components
import Comment from "./Comment";
import FullComment from "./FullComment";
import NewComment from "./NewComment";

// http
import http from "./services/HttpService";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error] = useState(false)

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await http.get(
          "/comments"
        );
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);

  const selectHandler = (id) => {
    setSelectedId(id)
  }

  const renderComment = () => {

    let renderedValue = <h1>Loading ...</h1>;
    if (error) renderedValue = <h1>fetching data failed!</h1>;
    
    if(comments && !error) {
        renderedValue = comments.map((data) => 
        <Comment
          key={data.id}
          name={data.name}
          email={data.email}
          onClick={() => selectHandler(data.id)}
        />
        )
    }

    return renderedValue;
  }


  return (
    <div>
      <section className="comment">
        {renderComment()}
      </section>
      <section className="fullComment">
        <FullComment commentId={selectedId} setCommentId={setSelectedId} setComments={setComments} />
      </section>
      <section className="newComment"> 
        <NewComment setComments={setComments} />
      </section>
    </div>
  );
};

export default Discussion;
