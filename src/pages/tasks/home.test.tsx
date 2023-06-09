import { screen } from "@testing-library/react";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import { setup } from "../../testUtils/setup";
import { Home } from "./home";
import { UIStateProvider } from "../../features/ui";
import { PageDataProvider } from "../page-context";
import { TaskProvider } from "../../features/tasks";

const componentWithProviders = (): JSX.Element => {
  return (
    <UIStateProvider>
      <PageDataProvider>
        <TaskProvider>
          <Home />
        </TaskProvider>
      </PageDataProvider>
    </UIStateProvider>
  );
};

const addTask = async (tasks: string[], user: UserEvent): Promise<void> => {
  const createTaskInput = screen.getByRole("textbox", { name: /enter task/i });
  const submitBtn = screen.getByRole("button", { name: /add task/i });
  for (const task of tasks) {
    await user.click(createTaskInput);
    await user.keyboard(task);
    await user.click(submitBtn);
  }
};

describe("home page tests", () => {
  test("should see task in list after form submit", async () => {
    const { user } = setup(componentWithProviders());
    await addTask(["This is a todo!"], user);
    const taskItem = screen.getByText(/this is a todo/i);
    expect(taskItem).toBeInTheDocument();
  });

  test("should be able to remove a task", async () => {
    const { user } = setup(componentWithProviders());
    await addTask(["Buy an umbrella"], user);
    const removeBtn = screen.getByRole("button", { name: /remove/i });
    await user.click(removeBtn);
    const taskItem = screen.queryByText(/buy an umbrella/i);
    expect(taskItem).not.toBeInTheDocument();
  });

  // Maybe this test should be split into parts
  test("should be able to edit a task", async () => {
    const { user, container } = setup(componentWithProviders());

    // To create the overlay container div
    // in which we render to with React Portal
    const overlayContainer = document.createElement("div");
    overlayContainer.setAttribute("id", "overlay");
    container.insertAdjacentElement("beforebegin", overlayContainer);

    await addTask(["Go outside for a rn"], user);
    const editBtn = screen.getByRole("button", { name: /edit/i });
    await user.click(editBtn);
    const editTaskInput = screen.getByRole("textbox", { name: /edit task/i });
    const editFormBtn = screen.getByRole("button", { name: /edit task/i });
    expect(editTaskInput).toBeVisible();
    expect(editTaskInput).toHaveFocus();
    await user.keyboard("{Backspace}un!");
    await user.click(editFormBtn);
    expect(editTaskInput).not.toBeVisible();
    const updatedTask = screen.getByText("Go outside for a run!");
    expect(updatedTask).toBeInTheDocument();
  });
});
