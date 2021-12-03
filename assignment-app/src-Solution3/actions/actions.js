export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const INCREMENT_CURRENT_QUESTION = "INCREMENT_CURRENT_QUESTION";

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

export const incrementCurrentQuestion = (isCorrect) => {
  return { type: INCREMENT_CURRENT_QUESTION, payload: { isCorrect } };
};
