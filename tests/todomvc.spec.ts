import { testToDo, expect } from "./fixtures/todomvc";

testToDo("Add a todo item", async ({ toDoPage, page }) => {
  await toDoPage.addToDo("Chicken dinner");
  await expect(page.getByTestId("todo-title")).toContainText([
    "Chicken dinner",
  ]);
});
