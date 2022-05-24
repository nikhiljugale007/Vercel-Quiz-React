import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quiz: [],
  answers: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuiz: (state, action) => {
      state.quiz = action.payload.quiz;
    },
    setAnswer: (state, action) => {
      state.answers[action.payload.questionNo - 1] = action.payload.option;
    },
    resetAnswer: (state, action) => {
      state.answers = [];
    },
  },
});

export const { setQuiz, setAnswer, resetAnswer } = quizSlice.actions;
export default quizSlice.reducer;
