import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesListComponenetComponent } from './messages-list-componenet.component';

describe('MessagesListComponenetComponent', () => {
  let component: MessagesListComponenetComponent;
  let fixture: ComponentFixture<MessagesListComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesListComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesListComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
