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

const TodoContext = React.createContext<TodosContextType>(
  [] as unknown as TodosContextType
);

export const TodoProvider = ({ children }: TodosProviderProps): JSX.Element => {
  const [todos, setTodos] = React.useState<Todo[]>([
    { content: "First todo test" },
  ]);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {children}
    </TodoContext.Provider>
  );
};

// Hooks
export const useGetTodos = (): Todo[] => {
  const [todos] = React.useContext(TodoContext);
  return todos;
};

type AddTodo = () => (todoContent: string) => void;

export const useAddTodo: AddTodo = () => {
  const [_, setTodos] = React.useContext(TodoContext);

  return (todoContent: string): void => {
    const newTodo: Todo = {
      content: todoContent,
    };

    setTodos((currTodos: Todo[]) => [...currTodos, newTodo]);
  };
};
