import React from "react";

const SectionTitle = (props) => {
  return (
    <div>
      <header className="section_title">
        <h6>{props.title}</h6>
        <h2>{props.descr}</h2>
      </header>
    </div>
  );
};

export default SectionTitle;
