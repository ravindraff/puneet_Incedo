import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/actions";
import CurrentScore from "./CurrentScore";
import Quiz from "./quiz";
import "./quizScoreParent.css";
import Result from "./result";

const quizState = (state) => {
  // console.log("QuizState", state);
  return state.main;
};
export default function QuizScoreParent() {
  const quiz = useSelector(quizState);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("in useEffect");
    dispatch(actions.fetchQuestions());
  }, []);
  console.log("Quiz", quiz);
  const [score, setScore] = useState(quiz.score);
  const [currentQuestion, setCurrentQuestion] = useState(quiz.currentQuestion);
  const [questionNo, setQuestionNo] = useState(1);
  const [showScore, setShowScore] = useState(quiz.showScore);
  const resetForm = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setQuestionNo(1);
    console.log("reset:", score, currentQuestion, questionNo, showScore);
    dispatch(actions.resetQuiz(score, currentQuestion, questionNo, showScore));
  };

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
            <div className="col-3">
              <button className="button" onClick={resetForm}>
                Back To Quiz
              </button>
            </div>
          </div>
          <div>
            <Result />
          </div>
        </>
      ) : (
        <>
          <div className="col-9">
            <Quiz />
          </div>
          <div className="col-3 mt-5 " style={{}}>
            <CurrentScore />
          </div>
        </>
      )}
    </div>
  );
}
