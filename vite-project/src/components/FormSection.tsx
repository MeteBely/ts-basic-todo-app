import { useState } from "react";
import { Itodo } from "../types/todoInterface.ts";

interface IFormProps {
  todos: Itodo[];
  setTodos: React.Dispatch<React.SetStateAction<Itodo[]>>;
}

const FormSection: React.FC<IFormProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todos !== null) {
      setTodos((prev) => [...prev, { id: todos.length, title, content }]);
    }
  };

  return (
    <section>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <input
          type="text"
          value={content}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setContent(e.target.value)
          }
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default FormSection;
