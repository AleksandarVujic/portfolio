import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidPagesActionComponent } from './mid-pages-action.component';

describe('MidPagesActionComponent', () => {
  let component: MidPagesActionComponent;
  let fixture: ComponentFixture<MidPagesActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidPagesActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidPagesActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
