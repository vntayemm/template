import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifybarComponent } from './notifybar.component';

describe('NotifybarComponent', () => {
  let component: NotifybarComponent;
  let fixture: ComponentFixture<NotifybarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifybarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifybarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
