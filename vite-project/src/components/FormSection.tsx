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
    setTitle("");
    setContent("");
    if (todos !== null) {
      setTodos((prev) => [...prev, { id: todos.length + 1, title, content }]);
    }
  };

  return (
    <section className="mb-8 font-serif mt-4">
      <form
        className="w-[800px] m-auto flex flex-col gap-2 items-center justify-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label className="text-[18px]">Title</label>
        <input
          className="outline-none border border-gray-400 rounded-sm w-[240px] px-2 mb-8"
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <label className="text-[18px]">Content</label>
        <textarea
          className="outline-none border border-gray-400 rounded-sm resize-none w-full px-2 h-20 mb-4"
          value={content}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
        />
        <button
          className="bg-red-400 px-12 py-2 rounded-md text-lg hover:bg-red-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default FormSection;
