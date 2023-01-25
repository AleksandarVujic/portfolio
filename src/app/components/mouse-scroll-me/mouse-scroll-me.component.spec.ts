import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseScrollMeComponent } from './mouse-scroll-me.component';

describe('MouseScrollMeComponent', () => {
  let component: MouseScrollMeComponent;
  let fixture: ComponentFixture<MouseScrollMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseScrollMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseScrollMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
