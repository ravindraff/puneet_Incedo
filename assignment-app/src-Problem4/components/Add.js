import React from "react";

//TODO:Get the State
export default function Add() {
  //TODO:Define UseSelector and UseDispatch
  useEffect(() => {
    //TODO:Fetch the Global State using Dispatch
  }, []);

  //TODO:Create a local State in structure of Questions array

  const questionInput = (e) => {
    //TODO:Set question to question inputted by the user
  };
  const optionInput = (e, i) => {
    //TODO:Set options to options inputted by the user
  };
  const opIsCorrectInput = (e, i) => {
    //TODO:Set isCorrect to isCorrect inputted by the user
  };

  const addOption = () => {
    //TODO:push an option in local state
  };
  const addQuestion = () => {
    alert("Question Added");
    //TODO:Dispatch the local State
  };

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
