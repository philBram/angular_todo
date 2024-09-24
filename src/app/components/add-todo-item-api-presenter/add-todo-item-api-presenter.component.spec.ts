import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoItemApiPresenterComponent } from './add-todo-item-api-presenter.component';

describe('AddTodoItemApiPresenterComponent', () => {
  let component: AddTodoItemApiPresenterComponent;
  let fixture: ComponentFixture<AddTodoItemApiPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTodoItemApiPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTodoItemApiPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
