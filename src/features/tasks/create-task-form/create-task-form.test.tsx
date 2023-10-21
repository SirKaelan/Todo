import { render, screen } from "@testing-library/react";
import { testUtils } from "utils";
import { CreateTaskForm } from "./create-task-form";
import { TaskProvider } from "../TaskContext";

describe("create-task-form component tests", () => {
  test("should be able to type in input", async () => {
    const { user } = testUtils.setup(<CreateTaskForm />);
    const taskInputEl: HTMLInputElement = screen.getByRole("textbox", {
      name: /enter task/i,
    });
    await user.click(taskInputEl);
    await user.keyboard("Go out for a walk");
    expect(taskInputEl).toHaveValue("Go out for a walk");
  });

  test("should see disabled button when input is empty", () => {
    render(<CreateTaskForm />);
    const taskInput = screen.getByRole("textbox", { name: /enter task/i });
    const submitBtn = screen.getByRole("button", { name: /add task/i });
    expect(taskInput).toHaveValue("");
    expect(submitBtn).toBeDisabled();
  });

  test("should see empty input and disabled btn after adding task", async () => {
    const { user } = testUtils.setup(
      <TaskProvider>
        <CreateTaskForm />
      </TaskProvider>
    );
    const taskInput = screen.getByRole("textbox", { name: /enter task/i });
    const submitBtn = screen.getByRole("button", { name: /add task/i });
    await user.click(taskInput);
    await user.keyboard("Stargaze");
    await user.click(submitBtn);
    expect(taskInput).toHaveValue("");
    expect(submitBtn).toBeDisabled();
  });
});
