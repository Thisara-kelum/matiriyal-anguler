import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMemberRegisterComponent } from './new-member-register.component';

describe('NewMemberRegisterComponent', () => {
  let component: NewMemberRegisterComponent;
  let fixture: ComponentFixture<NewMemberRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMemberRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMemberRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
