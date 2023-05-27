import { screen } from "@testing-library/react";
import { setup } from "../../../testUtils/setup";
import { CreateTodoForm } from "../create-todo-form";

describe("Unit tests for create-todo-form component", () => {
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
});
