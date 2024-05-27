import React from "react";

const Title = ({ startTitle, endTitle }) => {
  return (
    <div className="section-title">
      <h2>
        {startTitle} <span> {endTitle} </span>
      </h2>
    </div>
  );
};

export default Title;
