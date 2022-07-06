import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakComponent } from './vak.component';

describe('VakComponent', () => {
  let component: VakComponent;
  let fixture: ComponentFixture<VakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
