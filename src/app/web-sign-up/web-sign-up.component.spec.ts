import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSignUpComponent } from './web-sign-up.component';

describe('WebSignUpComponent', () => {
  let component: WebSignUpComponent;
  let fixture: ComponentFixture<WebSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
