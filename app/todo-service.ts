import { Injectable } from '@angular/core';
import { TodoModel } from "./todo-model";
@Injectable()
export class TodoService{
    todos= [
        new TodoModel("eat"),
        new TodoModel("sleep"),
        new TodoModel("code")
    ];
}