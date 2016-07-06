import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-item-render',
  template: `<style>
                .completed{
                    text-decoration: line-through;
                }
                </style>
            <div>
                <span [ngClass]="todo.status">{{todo.title}}</span>
                <button (click)="todo.toggle()">Toggle</button>
            </div>`
})
export class TodoItemRender {
   @Input() todo;
} 