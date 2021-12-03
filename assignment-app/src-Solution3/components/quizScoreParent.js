import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/actions";
import Quiz from "./quiz";
import "./quizScoreParent.css";

const quizState = (state) => {
  return state.main;
};
export default function QuizScoreParent() {
  const quiz = useSelector(quizState);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("in useEffect");
    dispatch(actions.fetchQuestions());
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
