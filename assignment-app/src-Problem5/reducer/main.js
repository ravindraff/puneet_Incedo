import * as actions from "../actions/actions";

const initialState = {
  questions: [],
  currentQuestion: 0,
  questionNO: 1,
  showScore: false,
  score: 0,
  //Todo:Add an array which contains true/false value selected by the user
};

const reducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case actions.INCREMENT_CURRENT_QUESTION:
      if (action.payload.isCorrect === true) {
        console.log("isCorrect", action.payload.isCorrect);
        const newScore = state.score + 1;
        state.score = newScore;

        console.log("score:", newScore);
      }
      //Todo:Record true/false value selected by the user
      const nextQuestion = state.currentQuestion + 1;
      const questionNumber = state.questionNO + 1;

      if (nextQuestion < state.questions.length) {
        state.currentQuestion = nextQuestion;
        state.questionNO = questionNumber;
      } else {
        const newShowScore = !state.showScore;
        state.showScore = newShowScore;
      }
      return {
        questions: state.questions,
        currentQuestion: state.currentQuestion,
        questionNO: state.questionNO,
        showScore: state.showScore,
        score: state.score,
        //TODO:Return selectChoice Value
      };

    case actions.RESET_QUIZ:
      return {
        score: action.payload.score,
        currentQuestion: action.payload.currentQuestion,
        questionNO: action.payload.questionNo,
        showScore: action.payload.showScore,
        questions: state.questions,
        //TODO:Return selectChoice Value
      };
    case actions.FETCH_QUESTIONS:
      const newQuestions = action.payload;
      state.questions = newQuestions;
      return {
        questions: state.questions,
        currentQuestion: state.currentQuestion,
        questionNO: state.questionNO,
        showScore: state.showScore,
        score: state.score,
        //TODO:Return selectChoice Value
      };
    default:
      return state;
  }
};

export default reducer;
