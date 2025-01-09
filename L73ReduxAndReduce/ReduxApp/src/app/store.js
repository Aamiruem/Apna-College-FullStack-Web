import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../features/todo/todoSlice";

export const stor = configureStore({
    reducer: {
        // Define your slices here
        todos: todoReducer
    }
});
