import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RegExpPasswordValidation } from './types/enum';
import { EyesIconComponent } from '../../svgs/eyes-icon/eyes-icon.component';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  templateUrl: './AuthFormComponent.component.html',
  styleUrls: ['./AuthFormComponent.component.scss'],
  imports: [ReactiveFormsModule, EyesIconComponent],
})
export class AuthFormComponent {
  form: FormGroup;
  show_password: boolean = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      password: ['', [Validators.required]],
    });
    this.form.get('password')?.valueChanges.subscribe(() => {
      this.handlePasswordValidation();
    });
  }
  private handlePasswordValidation(): void {
    const passwordElement = this.form.get('password');
    const passwordLevelElement: HTMLElement | null =
      document.querySelector('.password_strength');

    if (passwordElement?.value && passwordLevelElement) {
      this.updatePasswordStrength(passwordLevelElement, passwordElement.value);
    } else if (!passwordElement?.value && passwordLevelElement) {
      this.resetPasswordStrength(passwordLevelElement);
    }
  }

  private updatePasswordStrength(element: HTMLElement, password: string): void {
    this.resetPasswordStrength(element);
    if (new RegExp(RegExpPasswordValidation.EASY).test(password))
      element.classList.add('easy');
    if (new RegExp(RegExpPasswordValidation.MEDIUM).test(password))
      element.classList.add('medium');
    if (new RegExp(RegExpPasswordValidation.HARD).test(password))
      element.classList.add('hard');
  }
  private resetPasswordStrength(element: HTMLElement): void {
    element.classList.remove('easy', 'medium', 'hard');
  }

  togglePasswordVisibility(event: MouseEvent) {
    event.preventDefault();
    this.show_password = !this.show_password;
  }
  onSubmit(event: MouseEvent) {
    event.preventDefault();
  }
}
