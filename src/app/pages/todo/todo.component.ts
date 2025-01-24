import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { NTodo } from '../../models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input() todoData!: NTodo.TodoData
  @Output() onClickIcon = new EventEmitter<NTodo.TodoData>();
  @Input() odd!: boolean
  @Input() even!: boolean

  get priority(): string {
    let priorityExit: string = ""
    switch (this.todoData.priority) {
      case NTodo.Priority.LOW:
        priorityExit = NTodo.PriorityText.LOW
        break;
      case NTodo.Priority.HIGH:
        priorityExit = NTodo.PriorityText.HIGH
        break;
      case NTodo.Priority.MEDIUM:
        priorityExit = NTodo.PriorityText.MEDIUM
        break;
      default:
        break;
    }
    return priorityExit
  }

  get progress() {
    return this.todoData.progress * 100
  }

  get range() {
    let rangeExit: string = ''
    switch (true) {
      case this.todoData.progress * 100 >= 0 && this.todoData.progress * 100 < 31:
        rangeExit = NTodo.RangeText.LOW
        break;
      case this.todoData.progress * 100 > 30 && this.todoData.progress * 100 < 61:
        rangeExit = NTodo.RangeText.MEDIUM
        break;
      case this.todoData.progress * 100 > 60 && this.todoData.progress * 100 < 101:
        rangeExit = NTodo.RangeText.HIGH
        break;
    }
    return rangeExit
  }
}
