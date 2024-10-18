import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliosListPageComponent } from './portfolios-list-page.component';

describe('PortfoliosListPageComponent', () => {
  let component: PortfoliosListPageComponent;
  let fixture: ComponentFixture<PortfoliosListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliosListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliosListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
