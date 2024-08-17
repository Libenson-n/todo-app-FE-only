import { useContext } from "react";
import DeleteButton from "./DeleteButton";
import { Todo } from "../types/todos";
import { TodosContext } from "../context/TodosContext";

const TodoList = () => {
  const { todos, onComplete, onDelete } = useContext(TodosContext);

  return (
    <>
      {todos.length > 0 ? (
        <ul>
          {(todos as []).map((todo: Todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center px-8 border-b border-black/[0.08] h-12"
            >
              <span
                className={
                  todo.isCompleted
                    ? "line-through text-[#ccc] cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => onComplete(todo)}
              >
                {todo.text}
              </span>
              <DeleteButton action={onDelete} id={todo.id} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="h-full flex justify-center items-center">
          {" "}
          Add your first todo
        </p>
      )}
    </>
  );
};

export default TodoList;
