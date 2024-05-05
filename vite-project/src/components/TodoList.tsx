import { useAppDispatch, useAppSelector } from "../store.ts";
import { removeTodoList } from "../slices/todoSlice.ts";
import { Itodo } from "../types/todoInterface.ts";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const deleteClickHandler = (todo: Itodo) => {
    dispatch(removeTodoList(todo));
  };

  return (
    <section>
      <div className="flex flex-row gap-8 justify-start items-center w-[98%] m-auto flex-wrap font-serif">
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => (
            <div
              className="shadow-xl w-[600px] px-2 h-[280px] relative"
              key={todo.id}
            >
              <span className="text-lg font-semibold bg-red-400 rounded-full px-2 inline-block mb-2">
                {todo.id}
              </span>
              <h3>
                <span className="text-lg font-semibold text-red-600 mr-1">
                  Title:
                </span>
                {todo.title}
              </h3>
              <p className="mb-4">
                <span className="text-lg font-semibold text-red-600 mr-1">
                  Task:
                </span>
                {todo.content}
              </p>
              <button
                onClick={() => deleteClickHandler(todo)}
                className="bg-red-400 px-6 py-1 rounded-md text-lg hover:bg-red-500 absolute top-[80%] left-2"
              >
                Sil
              </button>
            </div>
          ))}
      </div>
    </section>
  );
};

export default TodoList;
