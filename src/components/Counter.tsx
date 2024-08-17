import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

const Counter = () => {
  const { count, totalTodos } = useContext(TodosContext);

  return (
    <>
      {totalTodos > 0 && (
        <p>
          <b>{count}</b> / {totalTodos} completed
        </p>
      )}
    </>
  );
};

export default Counter;
