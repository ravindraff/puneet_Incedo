import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/actions";
import "./quiz.css";

const quizState = (state) => {
  // console.log("QuizState", state);
  return state.main;
};
export default function Quiz() {
  const quiz = useSelector(quizState);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("in useEffect");
    dispatch(actions.fetchQuestions());
  }, []);
  console.log("Quiz", quiz);
  const handleAnswerButtonClick = (isCorrect) => {
    dispatch(actions.incrementCurrentQuestion(isCorrect));
  };
  return (
    <div className="app container mt-5 ">
      <div className="row">
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {quiz.questionNO}</span>/{quiz.questions?.length}
            </div>
            <div className="question-text">
              {quiz.questions[quiz.currentQuestion]?.questionText}
            </div>
          </div>
          <div className="answer-section">
            {quiz.questions[quiz.currentQuestion]?.answerOptions.map(
              (answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      </div>
    </div>
  );
}
