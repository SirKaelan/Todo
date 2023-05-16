import React from "react";

type Todo = {
  content: string;
};

// Create context
type TodosContextType =
  | [
      todoList: Todo[],
      setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
    ]
  | null;

export const TodosContext = React.createContext<TodosContextType>(null);

// Create provider
type TodosProviderProps = {
  children: JSX.Element;
};

const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todoList, setTodoList] = React.useState<Todo[]>([
    { content: "First todo test" },
  ]);
};

// Hooks
