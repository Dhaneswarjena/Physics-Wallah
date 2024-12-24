import React from "react";
import Resultsuar from "./Resultsuar";
import Resultsquare from "./Result";
import Rescarousel from "./Rescarousel";
import Leftrightcard from "./Leftrightcard";

const Section5 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="sec4head">
          <h2>Academic Excellence : Results</h2>
          <p className="mb-0">
            Giving wings to a millions dreams, a million more to go
          </p>
        </div>
        <div className="mt-4 mb-4 listclass">
          {Resultsquare.map((res, index) => (
            <Resultsuar title={res.title} key={index} />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="rescarasouel p-0">
          <Rescarousel />
        </div>
      </div>
      <div className="row mt10 mb-5">
        <Leftrightcard />
      </div>
    </div>
  );
};

export default Section5;
