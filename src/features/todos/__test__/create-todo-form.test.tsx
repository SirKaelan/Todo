import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreateTodoForm } from "../create-todo-form";

describe("Unit tests for create-todo-form component", () => {
  test("should be able to type in input", async () => {
    render(<CreateTodoForm placeholderText="Enter a task..." />);
    const todoInputEl: HTMLInputElement = screen.getByRole("textbox", {
      name: /enter todo/i,
    });
    // Fix "act" warning
    userEvent.type(todoInputEl, "Go out for a walk");
    expect(todoInputEl).toHaveValue("Go out for a walk");
  });
});
