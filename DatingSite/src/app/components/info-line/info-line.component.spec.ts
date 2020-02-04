import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLineComponent } from './info-line.component';

describe('InfoLineComponent', () => {
  let component: InfoLineComponent;
  let fixture: ComponentFixture<InfoLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
