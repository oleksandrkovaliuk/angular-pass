import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyesIconComponent } from './eyes-icon.component';

describe('EyesIconComponent', () => {
  let component: EyesIconComponent;
  let fixture: ComponentFixture<EyesIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EyesIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
