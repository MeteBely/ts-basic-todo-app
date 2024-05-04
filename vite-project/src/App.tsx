import "./App.css";
import TodoList from "./components/TodoList.tsx";
import FormSection from "./components/FormSection.tsx";
import { useState } from "react";
import { Itodo } from "./types/todoInterface.ts";

function App() {
  const [todos, setTodos] = useState<Array<Itodo>>([]);

  return (
    <>
      <FormSection todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
