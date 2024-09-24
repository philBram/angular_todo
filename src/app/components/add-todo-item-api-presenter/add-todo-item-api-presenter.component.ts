import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../models/classes/todoItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo-item-api-presenter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo-item-api-presenter.component.html',
  styleUrl: './add-todo-item-api-presenter.component.css'
})
export class AddTodoItemApiPresenterComponent {
  @Input() todoApiItem!: TodoItem
  @Output() addApiItem = new EventEmitter<void>()

  addApiItemClicked(): void {
    this.addApiItem.emit()
  }
}