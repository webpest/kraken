import React from "react";
import { Tags } from "../Tags";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="brand__header">
        <h1>Frontend Mentor</h1>
        <p>Feedback Board</p>
      </div>
      <div className="card">
        <Tags tags={["All", "bugs", "Feature", "UI", "UX", "Enhancement"]} />
      </div>
      <div className="card roadmap">
        <h3>
          Roadmap{" "}
          <span>
            <a href="#">View</a>
          </span>
        </h3>
        <ul>
          <li className="planned">
            Planned <span>2</span>
          </li>
          <li className="inprogress">
            InProgress <span>3</span>
          </li>
          <li className="live">
            Live <span>1</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
