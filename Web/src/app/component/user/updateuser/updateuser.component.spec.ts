import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserComponent } from './updateuser.component';

describe('UpdateuserComponent', () => {
  let component: UpdateUserComponent;
  let fixture: ComponentFixture<UpdateUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUserComponent]
    });
    fixture = TestBed.createComponent(UpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
