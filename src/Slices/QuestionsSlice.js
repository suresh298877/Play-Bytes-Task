import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        { question: 'If you could have any fictional character as a roommate, who would it be and why?', answered_count: 55 },
        { question: "What's the funniest thing you've ever accidentally said to a stranger?", answered_count: 55 },
        { question: "What's the silliest thing you've ever believed?", answered_count: 55 },
        { question: "What's the funniest thing you're ever accidentally said to a stranger?", answered_count: 55 },
        { question: "What's the silliest thing you've ever believed?", answered_count: 55 },
        { question: "What's the funniest thing you've ever accidentally said to a stranger?", answered_count: 55 },
        { question: "What's the silliest thing you've ever believed?", answered_count: 55 },
        { question: "What's the funniest thing you've ever accidentally said to a stranger?", answered_count: 55 },
        { question: 'If you could have any fictional character as a roommate, who would it be and why?', answered_count: 55 },
        { question: "What's the funniest thing you've ever accidentally said to a stranger?", answered_count: 55 },
        { question: "What's the silliest thing you've ever believed?", answered_count: 55 },
        { question: "What's the funniest thing you're ever accidentally said to a stranger?", answered_count: 55 },
        { question: "What's the silliest thing you've ever believed?", answered_count: 55 },
        { question: "What's the funniest thing you've ever accidentally said to a stranger?", answered_count: 55 },
        { question: "What's the silliest thing you've ever believed?", answered_count: 55 },
        { question: "What's the funniest thing you've ever accidentally said to a stranger?", answered_count: 55 },
        { question: 'If you could have any fictional character as a roommate, who would it be and why?', answered_count: 55 },
        { question: "What's the funniest thing you've ever accidentally said to a stranger?", answered_count: 55 },
        { question: "What's the silliest thing you've ever believed?", answered_count: 55 },
        { question: "What's the funniest thing you're ever accidentally said to a stranger?", answered_count: 55 },
        { question: "What's the silliest thing you've ever believed?", answered_count: 55 },
        { question: "What's the funniest thing you've ever accidentally said to a stranger?", answered_count: 55 },
        { question: "What's the silliest thing you've ever believed?", answered_count: 55 },
        { question: "What's the funniest thing you've ever accidentally said to a stranger?", answered_count: 55 },
    ],
}

export const QuestionsSlice = createSlice({
    name: "QuestionsSlice",
    initialState,
})

export default QuestionsSlice.reducer;