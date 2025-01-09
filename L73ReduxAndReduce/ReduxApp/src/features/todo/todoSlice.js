import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false }],
};
 export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
            const newTodo = {
                id: nanoid,
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: true };
                }
                return todo;
            });
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
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
