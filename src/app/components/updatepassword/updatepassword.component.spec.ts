import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepasswordComponent } from './updatepassword.component';

describe('UpdatepasswordComponent', () => {
  let component: UpdatepasswordComponent;
  let fixture: ComponentFixture<UpdatepasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UpdatepasswordComponent]
    });
    fixture = TestBed.createComponent(UpdatepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
