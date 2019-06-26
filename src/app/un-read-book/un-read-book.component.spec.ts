import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnReadBookComponent } from './un-read-book.component';

describe('UnReadBookComponent', () => {
  let component: UnReadBookComponent;
  let fixture: ComponentFixture<UnReadBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnReadBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnReadBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
