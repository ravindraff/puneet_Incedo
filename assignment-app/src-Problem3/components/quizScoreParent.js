import React, { useEffect } from "react";
import * as actions from "../actions/actions";
import Quiz from "./quiz";
import "./quizScoreParent.css";

//TODO:Get the State
export default function QuizScoreParent() {
  //TODO:Define UseSelector and UseDispatch
  useEffect(() => {
    console.log("in useEffect");
    //TODO:Fetch the questions using Dispatch
  }, []);

  return (
    <div className="container-fluid row">
      {quiz.showScore ? (
        <>
          <div className="col-3"></div>
          <div className="score-section col-6 mt-5">
            <div className="col-3"></div>
            <p className="col-6">
              You scored {quiz.score} out of {quiz.questions.length}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="col-9">
            <Quiz />
          </div>
        </>
      )}
    </div>
  );
}
