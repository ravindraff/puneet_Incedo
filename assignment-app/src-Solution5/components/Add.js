import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/actions";

const quizState = (state) => {
  // console.log("QuizState", state);
  return state.main;
};
export default function Add() {
  const quiz = useSelector(quizState);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("in useEffect");
    dispatch(actions.fetchQuestions());
  }, []);
  console.log("Quiz", quiz);

  const [quizs, setQuizs] = useState({
    questionText: "",
    answerOptions: [
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
    // correctAnswerIndex: 0
  });

  const questionInput = (e) => {
    console.log(e.target.value);

    let newQuizs = { ...quizs };
    console.log(newQuizs);
    newQuizs.questionText = e.target.value;
    setQuizs(newQuizs);
  };
  const optionInput = (e, i) => {
    console.log(i);
    console.log(e.target.value);
    let newQuizs = { ...quizs };
    console.log(newQuizs);
    newQuizs.answerOptions[i].answerText = e.target.value;
    setQuizs(newQuizs);
  };
  const opIsCorrectInput = (e, i) => {
    console.log(i);
    let newQuizs = { ...quizs };

    newQuizs.answerOptions.forEach((element, index) => {
      console.log(element, index);
      if (index == i) {
        element.isCorrect = true;
      } else {
        element.isCorrect = false;
      }
    });

    setQuizs(newQuizs);
  };

  const addOption = () => {
    let newQuizs = { ...quizs };
    newQuizs.answerOptions.push({ answerText: "", isCorrect: false });
    setQuizs(newQuizs);
  };
  const addQuestion = () => {
    alert("Question Added");
    console.log(quizs);
    console.log(JSON.stringify(quizs));
    dispatch(actions.postQuestions(quizs));
  };

  console.log("state: ", quizs);

  let options = quizs.answerOptions.map((option, i) => {
    return (
      <div className="input-group mt-3">
        <span className="input-group-text">
          Enter Option {i + 1} and isCorrect(true/false)
        </span>
        <input
          type="text"
          aria-label="Option1"
          className="form-control"
          onChange={(e) => optionInput(e, i)}
          id="Question"
          value={option.answerText}
        />
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={(e) => opIsCorrectInput(e, i)}
            value="true"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Correct Answer
          </label>
        </div>
      </div>
    );
  });

  return (
    <div className="container row mt-5">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter the Question"
          aria-label="Question"
          aria-describedby="basic-addon1"
          onChange={(e) => questionInput(e)}
          id="Question"
          value={quizs.questionText}
        />
      </div>

      {options}
      <button className="btn btn-primary col-2 mt-3 ms-2" onClick={addOption}>
        Add Option
      </button>
      <div className="container-fluid">
        <button
          className="btn btn-success col-2 mt-3 "
          onClick={() => addQuestion()}
        >
          Add Question
        </button>
      </div>
    </div>
  );
}
