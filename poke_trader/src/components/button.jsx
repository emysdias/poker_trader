import React from "react";
import "../styles/layout/button.css";

const Button = ({ text, fontColor, backgroundColor, shadow }) => {
  return (
    <section>
      {shadow ? (
        <button
          className="button__container__click"
          style={{ color: fontColor, backgroundColor: backgroundColor }}
        >
          {text}
        </button>
      ) : (
        <button
          className="button__container"
          style={{ color: fontColor, backgroundColor: backgroundColor }}
        >
          {text}
        </button>
      )}
    </section>
  );
};

export default Button;
