import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebLoginComponent } from './web-login.component';

describe('WebLoginComponent', () => {
  let component: WebLoginComponent;
  let fixture: ComponentFixture<WebLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
