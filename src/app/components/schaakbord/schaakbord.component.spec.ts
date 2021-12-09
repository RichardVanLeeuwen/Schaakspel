import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchaakbordComponent } from './schaakbord.component';

describe('SchaakbordComponent', () => {
  let component: SchaakbordComponent;
  let fixture: ComponentFixture<SchaakbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchaakbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchaakbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
