import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../Slices/QuestionsSlice"


const store = configureStore({
    reducer: {
        Questions: questionsReducer,
    },
})

export default store;