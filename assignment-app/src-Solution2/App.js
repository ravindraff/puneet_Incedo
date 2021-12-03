import React, { useEffect, useState } from "react";

export default function App() {
  console.log("in app");
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    console.log("Questions", questions);
    fetch("http://localhost:8000/questions/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestions(data);
      });
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionNO, setQuestionNO] = useState(1);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      console.log("isCorrect", isCorrect);
      setScore(score + 1);
      console.log("score:", score);
    }

    const nextQuestion = currentQuestion + 1;
    const questionNumber = questionNO + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setQuestionNO(questionNumber);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {questionNO}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion]?.questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion]?.answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
