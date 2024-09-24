import { Component, inject } from '@angular/core';
import { TodoItem } from '../../models/classes/todoItem';
import { TodoListPresenterComponent } from "../todo-list-presenter/todo-list-presenter.component";
import { AddTodoItemPresenterComponent } from '../add-todo-item-presenter/add-todo-item-presenter.component';
import { AddTodoItemApiPresenterComponent } from "../add-todo-item-api-presenter/add-todo-item-api-presenter.component";
import { TodoApiService } from '../../services/todo-api.service';
import { ITodoApiItem } from '../../models/interfaces/todoApiItem';

@Component({
  selector: 'app-todo-list-container',
  standalone: true,
  imports: [TodoListPresenterComponent, AddTodoItemPresenterComponent, 
    AddTodoItemApiPresenterComponent, AddTodoItemApiPresenterComponent],
  templateUrl: './todo-list-container.component.html',
  styleUrl: './todo-list-container.component.css'
})
export class TodoListContainerComponent {
  readonly todoApiService = inject(TodoApiService)
  todoList: TodoItem[] = []
  todoItem: TodoItem = new TodoItem(0, new Date(), "", "", "", false)
  todoApiItem: TodoItem = new TodoItem(0, new Date(), "", "", "", false)
  itemId = 1

  deleteItem(itemIndex: number): void {
    this.todoList = this.todoList.filter((item, index) => index !== itemIndex)
  }

  editItem(itemIndex: number): void {
    console.log(this.todoList[itemIndex].todoCompleted)
    this.todoItem = structuredClone(this.todoList[itemIndex])
  }

  addItem(): void {
    if (this.todoItem.id === 0) {
      let newTodoItem = new TodoItem(
        this.itemId++, 
        new Date(),
        this.todoItem.dateTodo,
        this.todoItem.todoName,
        this.todoItem.todoDescription,
        this.todoItem.todoCompleted
      )

      this.todoList.push(newTodoItem)
      this.todoItem = new TodoItem(0, new Date(), "", "", "", false)
    }
    else {
      let index = this.todoList.findIndex(item => item.id === this.todoItem.id)

      this.todoList[index] = this.todoItem
      this.todoItem = new TodoItem(0, new Date(), "", "", "", false)
    }
  }

  addApiItem(): void {
    this.todoApiService.getTodoApiItem().subscribe({
      next: (res: ITodoApiItem) => {
        this.todoList.push(new TodoItem(
          this.itemId++,
          new Date(),
          this.todoApiItem.dateTodo,
          this.todoApiItem.todoName,
          res.todo,
          res.completed
        ))
        this.todoApiItem = new TodoItem(0, new Date(), "", "", "", false)
      },
      error: error => console.error(error)
    })
  }
}