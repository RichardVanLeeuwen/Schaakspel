import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StukComponent } from './stuk.component';

describe('StukComponent', () => {
  let component: StukComponent;
  let fixture: ComponentFixture<StukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
