import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudentListComponent } from './sudent-list.component';

describe('SudentListComponent', () => {
  let component: SudentListComponent;
  let fixture: ComponentFixture<SudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
