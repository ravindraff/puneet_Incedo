import React from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  // TODO: Create states here
  const handleAnswerButtonClick = () => {
    // TODO:Increment score value when the answer is correct
    //      Increment the QuestionNo value
    //      Increment CurrentQuestion value
    //      Set ShowScore value to true when the user has answered all the questions
  };
  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <div className="score-section">
          You scored {/*TODO:Print Score */} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {/*TODO:Print QuestionNo */}</span>/
              {questions.length}
            </div>
            <div className="question-text">{/*TODO:Print Question */}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion]?.answerOptions.map((answerOption) => (
              <button
              /*TODO:Fire onClick Event */
              >
                {/*TODO:Print answerOptions */}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
