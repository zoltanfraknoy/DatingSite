import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileComponentComponent } from './profile-component.component';

describe('MyProfileComponentComponent', () => {
  let component: MyProfileComponentComponent;
  let fixture: ComponentFixture<MyProfileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
