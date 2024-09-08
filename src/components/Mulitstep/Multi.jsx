import React, { useState } from "react";
import "../../components/Mulitstep/Multi.css";

export default function Multi() {

    const [step, setSteps] = useState(1);

    function handlePrev() {
        if (step > 1) setSteps((step)=> - 1);
    }
    
    function handleNext() {
        if (step < 3) setSteps((step)=> step + 1);
    }

  return (
    <>
      <div className="wrap">
        <div className="progress_wrap">
            <div className="progress"></div>
            <div className="circle active">1</div>
            <div className="circle">2</div>
            <div className="circle">3</div>
        </div>
        <div className="contents"><h2>yuwfyhkrfh</h2></div>
        <div className="buttns">
            <button className="btn-s disabled" onClick={handlePrev}>prev</button>
            <button className="btn-s" onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
}
