import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: {
        // Define your slices here
        todos: todoReducer
    }
});
