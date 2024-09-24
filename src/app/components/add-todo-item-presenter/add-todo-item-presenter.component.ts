import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../models/classes/todoItem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-todo-item-presenter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-todo-item-presenter.component.html',
  styleUrl: './add-todo-item-presenter.component.css'
})
export class AddTodoItemPresenterComponent {
  @Input() todoItem!: TodoItem
  @Output() addItem = new EventEmitter<void>()

  addItemClick(): void {
    this.addItem.emit()
  }
}
