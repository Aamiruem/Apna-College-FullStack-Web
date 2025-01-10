import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: [{ id: "abc", task: "demo-task", isDone: false }],
};
 export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todo.push(action.payload);
            const newTodo = {
                id: nanoid,
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todo = state.todo.filter((todo) => todo.id !== action.payload);
        },
        markAsDone: (state, action) => {
            state.todo = state.todo.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: true };
                }
                return todo;
            });
        },
        toggleTodo: (state, action) => {
            state.todo = state.todo.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: !todo.isDone };
                }
                return todo;
            });
        },
    }
});

export const { addTodo, deleteTodo, markAsDone, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;



















// import { createSlice } from '@reduxjs/toolkit';

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState: [
//     { id: 1, task: 'Learn Redux', completed: false },
//     { id: 2, task: 'Build a Todo App', completed: false },
//   ],
//   reducers: {
//     addTodo: (state, action) => {
//       state.push(action.payload);
//     },
//   },
// });

// export const { addTodo, deleteTodo, markAsDone, toggleTodo } = todoSlice.actions;
// export default todoSlice.reducer;
