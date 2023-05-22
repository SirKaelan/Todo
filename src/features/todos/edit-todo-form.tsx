import React, { useState } from "react";

type EditTodoProps = {
  todoId: string;
};
// Extract these types to external file
type FormSubmitEvent = React.FormEvent<HTMLFormElement>;
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type FormClickEvent = React.MouseEvent<HTMLFormElement, MouseEvent>;

export const EditTodoForm = ({ todoId }: EditTodoProps): JSX.Element => {
  const [todo, setTodo] = useState<string>("");
  console.log(todoId);

  const handleTodoInput = (e: InputChangeEvent): void => {
    setTodo(e.currentTarget.value);
  };

  const handleFormClick = (e: FormClickEvent): void => {
    // To stop overlay from closing on form element click
    e.stopPropagation();
  };

  return (
    <form onClick={handleFormClick}>
      <input type="text" value={todo} onChange={handleTodoInput} />
      <button type="submit" disabled={!todo ? true : false}>
        Edit task
      </button>
    </form>
  );
};
