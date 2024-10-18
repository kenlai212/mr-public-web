import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrInfoPageComponent } from './mr-info-page.component';

describe('MrInfoPageComponent', () => {
  let component: MrInfoPageComponent;
  let fixture: ComponentFixture<MrInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MrInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
