import React, { useCallback, useState } from "react";

type CreateTodoFormProps = {
  placeholderText: string;
};

type EventType = React.ChangeEvent<HTMLInputElement>;

export const CreateTodoForm = ({
  placeholderText,
}: CreateTodoFormProps): JSX.Element => {
  const [todoTask, setTodoTask] = useState<string>("");

  const handleTodoInput = useCallback((e: EventType): void => {
    setTodoTask(e.currentTarget.value);
  }, []);

  return (
    <input
      type="text"
      placeholder={placeholderText}
      value={todoTask}
      onChange={handleTodoInput}
    />
  );
};
