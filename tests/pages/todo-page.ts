import type {Page, Locator} from '@playwright/test';

export class TodoPage{
    private readonly inputBox : Locator;
    private readonly todoItems : Locator;
    constructor (public readonly page: Page){
        this.inputBox= this.page.locator('input.new-todo');
        this.todoItems= this.page.locator('todo-item')
    }
    async goTo (){
        await this.page.goto('https://demo.playwright.dev/todomvc/');
    }
    async addToDo(text: string){
        await this.inputBox.fill(text);
        await this.inputBox.press('Enter');
    }
    async removeToDo(text: string){
        const todo= this.todoItems.filter({hasText: text});
        await todo.hover();
        await todo.getByLabel('Delete').click();
    }
    async removeAllToDos(){
        while((await this.todoItems.count()>0)){
            await this.removeToDo(await this.todoItems.first().innerText());
        }
    }

}
