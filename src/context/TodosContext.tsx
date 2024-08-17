import { createContext, useState } from "react";
import { Todo } from "../types/todos";
// import { initialTodos } from "../data/initialTodos";

type TodosProviderProps = {
  children: React.ReactNode;
};

type TodosContextProps = {
  todos: Todo[];
  count: number;
  totalTodos: number;
  addTodo: (text: string) => void;
  onDelete: (id: number) => void;
  onComplete: (todo: Todo) => void;
};

const defaultContextValue: TodosContextProps = {
  todos: [],
  count: 0,
  totalTodos: 0,
  addTodo: () => {},
  onDelete: () => {},
  onComplete: () => {},
};

export const TodosContext =
  createContext<TodosContextProps>(defaultContextValue);

const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [count, setCount] = useState<number>(0);

  const onComplete = (todo: Todo) => {
    todo.isCompleted = !todo.isCompleted;
    setTodos((prevTodos) =>
      (prevTodos as []).map((e: Todo) =>
        e.id === todo.id ? { ...e, isCompleted: todo.isCompleted } : e
      )
    );
    updateCount();
  };

  const updateCount = () => {
    const completed = todos?.filter((todo) => todo.isCompleted === true).length;
    setCount(completed);
  };

  const totalTodos = todos.length;

  console.log(totalTodos);

  const onDelete = (id: number) => {
    setTodos((prevTodos) =>
      (prevTodos as []).filter((todo: { id: number }) => todo.id !== id)
    );
  };

  const addTodo = (text: string) => {
    const newTodo = {
      id: todos?.length + 1,
      text: text,
      isCompleted: false,
    };
    setTodos([...(todos as []), newTodo]);
  };

  return (
    <TodosContext.Provider
      value={{ todos, count, totalTodos, onDelete, onComplete, addTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
