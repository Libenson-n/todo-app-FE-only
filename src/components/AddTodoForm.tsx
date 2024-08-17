import { useState, useContext } from "react";
import Button from "./Button";
import { TodosContext } from "../context/TodosContext";

const AddTodoForm = () => {
  const { addTodo } = useContext(TodosContext);
  const [input, setInput] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Add Todo"
        value={input}
        className="rounded-lg h-10 p-2"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

export default AddTodoForm;
