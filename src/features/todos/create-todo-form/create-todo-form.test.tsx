import { render, screen } from "@testing-library/react";
import { setup } from "../../../testUtils/setup";
import { CreateTodoForm } from "./create-todo-form";
import { TodoProvider } from "../TodoContext";

describe("create-todo-form component tests", () => {
  test("should be able to type in input", async () => {
    const { user } = setup(
      <CreateTodoForm placeholderText="Enter a task..." />
    );
    const todoInputEl: HTMLInputElement = screen.getByRole("textbox", {
      name: /enter todo/i,
    });
    await user.click(todoInputEl);
    await user.keyboard("Go out for a walk");
    expect(todoInputEl).toHaveValue("Go out for a walk");
  });

  test("should see disabled button when input is empty", () => {
    render(<CreateTodoForm placeholderText="Enter a task..." />);
    const todoInput = screen.getByRole("textbox", { name: /enter todo/i });
    const submitBtn = screen.getByRole("button", { name: /add task/i });
    expect(todoInput).toHaveValue("");
    expect(submitBtn).toBeDisabled();
  });

  test("should see empty input and disabled btn after adding todo", async () => {
    const { user } = setup(
      <TodoProvider>
        <CreateTodoForm placeholderText="Enter a task..." />
      </TodoProvider>
    );
    const todoInput = screen.getByRole("textbox", { name: /enter todo/i });
    const submitBtn = screen.getByRole("button", { name: /add task/i });
    await user.click(todoInput);
    await user.keyboard("Stargaze");
    await user.click(submitBtn);
    expect(todoInput).toHaveValue("");
    expect(submitBtn).toBeDisabled();
  });
});
