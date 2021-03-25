import React from "react";
import "../styles/layout/button.css";

const Button = ({ text, fontColor, backgroundColor }) => {
  return (
    <section>
      <button
        className="button__container"
        style={{ color: fontColor, backgroundColor: backgroundColor }}
      >
        {text}
      </button>
    </section>
  );
};

export default Button;
