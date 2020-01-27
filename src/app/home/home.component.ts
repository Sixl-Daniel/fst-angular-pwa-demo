import { Component, OnInit } from "@angular/core";

import * as uuidV4 from "uuid/v4";

import { DatabaseService } from "../database.service";
import { Todo } from "../todo";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.styl"]
})
export class HomeComponent implements OnInit {
    constructor(private databaseService: DatabaseService) {}

    todos: Todo[];

    ngOnInit() {
        this.updateTodos();
    }

    async updateTodos() {
        this.todos = await this.databaseService.todos.toArray();
    }

    async addTodo(title: string) {
        await this.databaseService.todos.add({
            id: uuidV4(),
            title,
            done: false
        });
        await this.updateTodos();
    }

    async deleteTodo(event, id: string) {
        event.stopPropagation();
        await this.databaseService.todos.delete(id);
        await this.updateTodos();
    }

    async toggleTodo(event) {
        const todo = event.option.value;
        todo.done = !todo.done;
        await this.databaseService.todos.put(todo);
    }
}
