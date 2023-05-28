import { screen } from "@testing-library/react";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import { setup } from "../../testUtils/setup";
import { Home } from "../home";
import { UIStateProvider } from "../../features/ui";
import { PageDataProvider } from "../page-context";
import { TodoProvider } from "../../features/todos";

const componentWithProviders = (): JSX.Element => {
  return (
    <UIStateProvider>
      <PageDataProvider>
        <TodoProvider>
          <Home />
        </TodoProvider>
      </PageDataProvider>
    </UIStateProvider>
  );
};

const addTodo = async (todos: string[], user: UserEvent): Promise<void> => {
  const createTodoInput = screen.getByRole("textbox", { name: /enter todo/i });
  const submitBtn = screen.getByRole("button", { name: /add task/i });
  for (const todo of todos) {
    await user.click(createTodoInput);
    await user.keyboard(todo);
    await user.click(submitBtn);
  }
};

describe("home page tests", () => {
  test("should see todo in list after form submit", async () => {
    const { user } = setup(componentWithProviders());
    await addTodo(["This is a todo!"], user);
    const todoItem = screen.getByText(/this is a todo/i);
    expect(todoItem).toBeInTheDocument();
  });

  test("should be able to remove a todo", async () => {
    const { user } = setup(componentWithProviders());
    await addTodo(["Buy an umbrella"], user);
    const removeBtn = screen.getByRole("button", { name: /remove/i });
    await user.click(removeBtn);
    const todoItem = screen.queryByText(/buy an umbrella/i);
    expect(todoItem).not.toBeInTheDocument();
  });

  // Maybe this test should be split into parts
  test("should be able to edit a todo", async () => {
    const { user, container } = setup(componentWithProviders());

    // To create the overlay container div
    // in which we render to with React Portal
    const overlayContainer = document.createElement("div");
    overlayContainer.setAttribute("id", "overlay");
    container.insertAdjacentElement("beforebegin", overlayContainer);

    await addTodo(["Go outside for a rn"], user);
    const editBtn = screen.getByRole("button", { name: /edit/i });
    await user.click(editBtn);
    const editTodoInput = screen.getByRole("textbox", { name: /edit todo/i });
    const editFormBtn = screen.getByRole("button", { name: /edit task/i });
    expect(editTodoInput).toBeVisible();
    expect(editTodoInput).toHaveFocus();
    await user.keyboard("{Backspace}un!");
    await user.click(editFormBtn);
    expect(editTodoInput).not.toBeVisible();
    const updatedTodo = screen.getByText("Go outside for a run!");
    expect(updatedTodo).toBeInTheDocument();
  });
});
