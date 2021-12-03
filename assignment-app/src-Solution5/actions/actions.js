export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const RESET_QUIZ = "RESET_QUIZ";
export const INCREMENT_CURRENT_QUESTION = "INCREMENT_CURRENT_QUESTION";

export const SCORE = "SCORE";

export const fetchQuestions = () => {
  return (dispatch) => {
    fetch("http://localhost:8000/questions/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: FETCH_QUESTIONS, payload: data });
      });
  };
};

export const postQuestions = (quizs) => {
  return () => {
    fetch("http://localhost:8000/questions/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(quizs),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
};

export const incrementCurrentQuestion = (isCorrect) => {
  return { type: INCREMENT_CURRENT_QUESTION, payload: { isCorrect } };
};
export const resetQuiz = (score, currentQuestion, questionNo, showScore) => {
  return {
    type: RESET_QUIZ,
    payload: { score, currentQuestion, questionNo, showScore },
  };
};
