import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswordcontComponent } from './resetpasswordcont.component';

describe('ResetpasswordcontComponent', () => {
  let component: ResetpasswordcontComponent;
  let fixture: ComponentFixture<ResetpasswordcontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpasswordcontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpasswordcontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
