import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quiz: {},
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuiz: (state, action) => {
      state.quiz = action.payload.quiz;
    },
  },
});

export const { setQuiz } = quizSlice.actions;
export default quizSlice.reducer;
