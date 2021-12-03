import React from "react";

const ArrayRendering = () => {
  return (
    <ul>
      {["first", "second", "third"].map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ArrayRendering;
