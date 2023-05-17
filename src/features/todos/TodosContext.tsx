import React from "react";

type Todo = {
  content: string;
};

type TodosContextType = [
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
];

type TodosProviderProps = {
  children: JSX.Element;
};

export const TodosContext = React.createContext<TodosContextType | null>(null);

export const TodosProvider = ({
  children,
}: TodosProviderProps): JSX.Element => {
  const [todos, setTodos] = React.useState<Todo[]>([
    { content: "First todo test" },
  ]);

  return (
    <TodosContext.Provider value={[todos, setTodos]}>
      {children}
    </TodosContext.Provider>
  );
};

// Hooks
