import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreationEditionComponent } from './user-creation-edition.component';

describe('UserCreationEditionComponent', () => {
  let component: UserCreationEditionComponent;
  let fixture: ComponentFixture<UserCreationEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreationEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreationEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
