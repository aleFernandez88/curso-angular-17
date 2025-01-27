import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso-angular-17';
  todoData: NTodo.TodoData[] = TODO_DATA.filter(item => item.id < 3);

  @ViewChild(TodoComponent) todo?: TodoComponent;

  constructor() { }
  getTodoInfo(val: NTodo.TodoData) {
    console.log('val: ', val)
  }

  orderData() {
    this.todoData.sort((a, b) => a.priority - b.priority)
  }

  selectTodo() {
    const todo = document.querySelector('app-todo');
    console.log(todo);

  }
}
