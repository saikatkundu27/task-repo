import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShcSearchComponent } from './shc-search.component';

describe('ShcSearchComponent', () => {
  let component: ShcSearchComponent;
  let fixture: ComponentFixture<ShcSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShcSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShcSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
