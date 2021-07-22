import React from "react";
import "./select.scss";

const Select = () => {
  return (
    <div className="select__wrapper">
      <span>Sort by:</span>
      <select name="locations" id="locations" defaultValue="Most Upvotes">
        <option value="Most Upvotes">Most Upvotes</option>
      </select>
    </div>
  );
};

export default Select;
