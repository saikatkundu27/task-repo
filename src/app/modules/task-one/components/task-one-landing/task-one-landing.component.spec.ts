import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOneLandingComponent } from './task-one-landing.component';

describe('TaskOneLandingComponent', () => {
  let component: TaskOneLandingComponent;
  let fixture: ComponentFixture<TaskOneLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskOneLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskOneLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
