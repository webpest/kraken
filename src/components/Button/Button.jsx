import React from "react";
import "./Button.scss";

const Button = ({ children, icon, ...props }) => {
  return (
    <button className="btn" {...props}>
      <span>{icon}</span>
      {children}
    </button>
  );
};

export default Button;
