const emptyTaskErrorMessage = "You must enter a task!";

export const taskValidator = (content: string): string => {
  if (!content) return emptyTaskErrorMessage;
  return "";
};
