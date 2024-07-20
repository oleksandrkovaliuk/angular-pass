import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassForm } from './pass-form.component';

describe('PassForm', () => {
  let component: PassForm;
  let fixture: ComponentFixture<PassForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PassForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
