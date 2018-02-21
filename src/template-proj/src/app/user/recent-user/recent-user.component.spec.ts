import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentUserComponent } from './recent-user.component';

describe('RecentUserComponent', () => {
  let component: RecentUserComponent;
  let fixture: ComponentFixture<RecentUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
