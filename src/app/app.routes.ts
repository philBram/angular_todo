import { Routes } from '@angular/router';
import { TodoListContainerComponent } from './components/todo-list-container/todo-list-container.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'todo-list-container',
        pathMatch: 'full'
    },
    {
        path: 'todo-list-container',
        component: TodoListContainerComponent
    }
];
