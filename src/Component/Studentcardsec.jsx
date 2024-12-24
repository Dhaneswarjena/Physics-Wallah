import React from "react";

const Studentcardsec = ({ imgsrc, title, para, bg }) => {
  return (
    <div className="col-md-3">
      <div class={`card1 ${bg}`}>
        <div class="content1">
          <h1>{title}</h1>
          <p>{para}</p>
        </div>
        <img src={imgsrc} alt={title} />
      </div>
    </div>
  );
};

export default Studentcardsec;
