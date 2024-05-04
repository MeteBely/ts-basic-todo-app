import { Itodo } from "../types/todoInterface.ts";

interface ITodosProps {
  todos: Itodo[];
}

const TodoList: React.FC<ITodosProps> = ({ todos }) => {
  return (
    <section>
      <div className="flex flex-row gap-8 justify-start items-center w-[98%] m-auto flex-wrap">
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => (
            <div className="shadow-xl w-[600px] px-2 h-[200px]" key={todo.id}>
              <span className="text-lg font-semibold bg-red-400 rounded-full px-2 inline-block mb-2">
                {todo.id}
              </span>
              <h3>
                <span className="text-lg font-semibold text-red-600 mr-1">
                  Title:
                </span>
                {todo.title}
              </h3>
              <p>
                <span className="text-lg font-semibold text-red-600 mr-1">
                  Content:
                </span>
                {todo.content}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default TodoList;
