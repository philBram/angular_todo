import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListPresenterComponent } from './todo-list-presenter.component';

describe('TodoListPresenterComponent', () => {
  let component: TodoListPresenterComponent;
  let fixture: ComponentFixture<TodoListPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
