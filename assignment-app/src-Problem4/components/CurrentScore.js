import React, { useEffect } from "react";
import "./currentScore.css";

//TODO:Get the State
export default function CurrentScore() {
  //TODO:Define UseSelector and UseDispatch
  useEffect(() => {
    //TODO:Fetch the State using Dispatch
  }, []);
  console.log("Quiz", quiz);
  return (
    <div className="current-score-section">
      You Current Score is {/*TODO:Print Score */}
    </div>
  );
}
