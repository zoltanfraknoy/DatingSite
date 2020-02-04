import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterComponentComponent } from './tester-component.component';

describe('TesterComponentComponent', () => {
  let component: TesterComponentComponent;
  let fixture: ComponentFixture<TesterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
