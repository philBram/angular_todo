import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoItemPresenterComponent } from './add-todo-item-presenter.component';

describe('AddTodoItemPresenterComponent', () => {
  let component: AddTodoItemPresenterComponent;
  let fixture: ComponentFixture<AddTodoItemPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTodoItemPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTodoItemPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
