import React from "react";

const Cardimagetext = ({ imgsrc, heading, paragraph }) => {
  return (
    <div className="col-md-3">
      <div className="Sectionbg4">
        <img src={imgsrc} alt="play" />
        <div className="mt-2 fw-semibold f-18">{heading}</div>
        <div>{paragraph}</div>
      </div>
    </div>
  );
};

export default Cardimagetext;
