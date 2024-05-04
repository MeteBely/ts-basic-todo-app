import { Itodo } from "../types/todoInterface.ts";

interface ITodosProps {
  todos: Itodo[];
}

const TodoList: React.FC<ITodosProps> = ({ todos }) => {
  return (
    <section>
      {todos &&
        todos.length > 0 &&
        todos.map((todo) => (
          <div className="shadow-lg" key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <span>{todo.id}</span>
          </div>
        ))}
    </section>
  );
};

export default TodoList;
