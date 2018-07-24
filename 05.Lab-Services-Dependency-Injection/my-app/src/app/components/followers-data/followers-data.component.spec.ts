import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersDataComponent } from './followers-data.component';

describe('FollowersDataComponent', () => {
  let component: FollowersDataComponent;
  let fixture: ComponentFixture<FollowersDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
