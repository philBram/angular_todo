import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../models/classes/todoItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list-presenter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list-presenter.component.html',
  styleUrl: './todo-list-presenter.component.css'
})
export class TodoListPresenterComponent {
  @Input() todoList!: TodoItem[]
  @Output() deleteItem = new EventEmitter<number>()
  @Output() editItem = new EventEmitter<number>()

  deleteItemClicked(itemIndex: number): void {
    this.deleteItem.emit(itemIndex)
  }

  editItemClicked(itemIndex: number): void {
    this.editItem.emit(itemIndex)
  }
}
