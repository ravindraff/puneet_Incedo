import * as actions from "../actions/actions";

const initialState = {
  questions: [],
  currentQuestion: 0,
  questionNO: 1,
  showScore: false,
  score: 0,
  selectedChoice: [],
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
      let choiceSelected = [...state.selectedChoice, action.payload.isCorrect];
      state.selectedChoice = choiceSelected;
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
        selectedChoice: state.selectedChoice,
      };

    case actions.RESET_QUIZ:
      return {
        score: action.payload.score,
        currentQuestion: action.payload.currentQuestion,
        questionNO: action.payload.questionNo,
        showScore: action.payload.showScore,
        questions: state.questions,
        selectedChoice: state.selectedChoice,
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
        selectedChoice: state.selectedChoice,
      };
    default:
      return state;
  }
};

export default reducer;
