import React, { useState } from "react";

type CreateTodoFormProps = {
  placeholderText: string;
};

export const CreateTodoForm = ({
  placeholderText,
}: CreateTodoFormProps): JSX.Element => {
  const [todoTask, setTodoTask] = useState<string>("");

  return (
    <input
      type="text"
      placeholder={placeholderText}
      value={todoTask}
      onChange={(e) => setTodoTask(e.target.value)}
    />
  );
};
