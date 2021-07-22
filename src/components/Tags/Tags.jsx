import React from "react";
import Tag from "./Tag";
import "./tag.scss";

const Tags = ({ tags = [] }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <Tag tag={tag} key={index} />
      ))}
    </div>
  );
};

export default Tags;
