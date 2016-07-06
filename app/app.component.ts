import { Component } from '@angular/core';
import { TodoInput } from './todo-input';
import { TodoService } from "./todo-service";
import { TodoList } from "./todo-list";
import { TodoModel } from "./todo-model";
import { TodoItemRender} from "./todo-item-render";
@Component({
  selector: 'my-app',
  directives: [TodoInput, TodoList],
  template: `<div><todo-input></todo-input>
        <todo-list></todo-list>
  </div>`
})
export class AppComponent { }