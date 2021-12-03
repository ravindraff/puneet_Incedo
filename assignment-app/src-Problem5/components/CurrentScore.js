import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/actions";
import "./currentScore.css";

const quizState = (state) => {
  // console.log("QuizState", state);
  return state.main;
};
export default function CurrentScore() {
  const quiz = useSelector(quizState);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("in useEffect");
    dispatch(actions.fetchQuestions());
  }, []);
  console.log("Quiz", quiz);
  return (
    <div className="current-score-section">
      You Current Score is {quiz.score}
    </div>
  );
}
