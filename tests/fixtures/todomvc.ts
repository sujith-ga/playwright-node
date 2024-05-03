import { TodoPage } from "../pages/todo-page";
import { test } from "@playwright/test";
import expect from "@playwright/test";

type Fixtures = {
    toDoPage: TodoPage;
    };

export const testToDo  = test.extend<Fixtures>({
    toDoPage: async ({ page }, use) => {
        const toDoPage: TodoPage= new TodoPage(page);
        await toDoPage.goTo();
        await toDoPage.addToDo('Buy Milk')
        await toDoPage.addToDo('Buy Eggs')
        await use(toDoPage);
        await toDoPage.removeAllToDos();
    },
    });
export { expect } from "@playwright/test";