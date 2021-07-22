import React from "react";
import { Tags } from "../Tags";
import { BsFillChatFill, BsChevronUp } from "react-icons/bs";

import "./feedback.scss";

const FeedBack = ({ feedback }) => {
  return (
    <div className="feedback__card">
      <div className="upvote">
        <BsChevronUp />
        {feedback.upvote}
      </div>
      <div className="feedback">
        <h3>Preview images not loading</h3>
        <p>{feedback.title}</p>
        <Tags tags={feedback.tags} />
      </div>
      <div className="comment">
        <BsFillChatFill /> <span>{feedback.comments}</span>
      </div>
    </div>
  );
};

export default FeedBack;
