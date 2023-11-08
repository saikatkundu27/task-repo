import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityCodeSearchComponent } from './commodity-code-search.component';

describe('CommodityCodeSearchComponent', () => {
  let component: CommodityCodeSearchComponent;
  let fixture: ComponentFixture<CommodityCodeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommodityCodeSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityCodeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
