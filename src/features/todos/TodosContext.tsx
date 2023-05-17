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

const TodosContext = React.createContext<TodosContextType>(
  [] as unknown as TodosContextType
);

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
export const useGetTodos = (): Todo[] => {
  const [todos] = React.useContext(TodosContext);
  return todos;
};
