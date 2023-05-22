import React from "react";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  content: string;
};

type TodoContextType = [
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
];

type TodoProviderProps = {
  children: JSX.Element;
};

const TodoContext = React.createContext<TodoContextType>(
  [] as unknown as TodoContextType
);

export const TodoProvider = ({ children }: TodoProviderProps): JSX.Element => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

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

type AddTodo = (todoContent: string) => void;

export const useAddTodo = (): AddTodo => {
  const [_, setTodos] = React.useContext(TodoContext);

  return (todoContent: string): void => {
    const newTodo: Todo = {
      id: uuidv4(),
      content: todoContent,
    };

    setTodos((currTodos: Todo[]): Todo[] => [...currTodos, newTodo]);
  };
};

type RemoveTodo = (id: string) => void;

export const useRemoveTodo = (): RemoveTodo => {
  const [_, setTodos] = React.useContext(TodoContext);

  return (id: string) => {
    setTodos((currTodos: Todo[]): Todo[] =>
      currTodos.filter((todo: Todo) => todo.id !== id)
    );
  };
};

type GetTodo = (id: string) => Todo;

export const useGetTodo = (): GetTodo => {
  const [todos] = React.useContext(TodoContext);

  return (id: string): Todo => {
    const todo: Todo = todos.find((todo: Todo) => todo.id === id) as Todo;
    return todo;
  };
};

type EditTodo = (id: string, content: string) => void;

export const useEditTodo = (): EditTodo => {
  const [_, setTodos] = React.useContext(TodoContext);

  return (id: string, content: string): void => {
    const newTodos = (currTodos: Todo[]): Todo[] => {
      const todos: Todo[] = [...currTodos];
      const todoIndex: number = todos.findIndex((todo: Todo) => todo.id === id);
      const todo: Todo = todos[todoIndex];
      todos[todoIndex] = { ...todo, content };
      return todos;
    };

    setTodos(newTodos);
  };
};
