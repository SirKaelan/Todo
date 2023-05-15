import React from "react";

type CreateTodoFormProps = {
  placeholderText: string;
};

export const CreateTodoForm = ({
  placeholderText,
}: CreateTodoFormProps): JSX.Element => {
  return <input type="text" placeholder={placeholderText} />;
};
