import { createSlice } from "@reduxjs/toolkit";

export const initialState = [];

const todoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // action creater that adds  todo item to the state
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    // action creater that deletes a todo item from the state
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    // action creater that updates a todo item description
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            description: action.payload.description,
          };
        }
        return todo;
      });
    },

    completedTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completedTodos } =
  todoReducer.actions;
export const reducer = todoReducer.reducer;
