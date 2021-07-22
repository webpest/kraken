import React from "react";
import FeedBack from "./FeedBack";
import { Button } from "../Button";
import { Select } from "../Select";
import { BsAwardFill, BsPlus } from "react-icons/bs";
import "./feedback.scss";

const FeedBacks = ({ feedbacks = [] }) => {
  return (
    <div className="feedback__list">
      <div className="header">
        <span>
          <BsAwardFill />
        </span>
        <h3>6 Suggestions</h3>
        <div>
          <Select />
        </div>
        <Button icon={<BsPlus />}>Add Feedback</Button>
      </div>
      {feedbacks.map((feedback) => (
        <FeedBack feedback={feedback} key={feedback.id} />
      ))}
    </div>
  );
};

export default FeedBacks;
