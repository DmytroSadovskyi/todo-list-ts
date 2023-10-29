import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodosState {
  items: Todo[];
}

const initialState: TodosState = {
  items: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: uuidv4(),
        text: action.payload,
        completed: false,
      });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;
