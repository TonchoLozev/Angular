import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesDataComponent } from './repositories-data.component';

describe('RepositoriesDataComponent', () => {
  let component: RepositoriesDataComponent;
  let fixture: ComponentFixture<RepositoriesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoriesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
