import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Itodo } from "../types/todoInterface.ts";

interface todoState {
  todos: Itodo[] | null;
}

const storedTodos = localStorage.getItem("todoList");
const defaultTodos: Itodo[] = storedTodos ? JSON.parse(storedTodos) : [];

const initialState: todoState = {
  todos: storedTodos ? JSON.parse(storedTodos) : defaultTodos,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoList: (state, action: PayloadAction<Itodo>) => {
      const newTodo: Itodo = action.payload;
      state.todos?.push(newTodo);
      localStorage.setItem("todoList", JSON.stringify(state.todos));
    },
    removeTodoList: (state, action: PayloadAction<Itodo>) => {
      const newTodo: Itodo = action.payload;
      state.todos = state.todos
        ? state.todos.filter((todo) => todo.id !== newTodo.id)
        : [];
      localStorage.setItem("todoList", JSON.stringify(state.todos));
    },
  },
});

export const { addTodoList, removeTodoList } = todoSlice.actions;

export default todoSlice.reducer;
