import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthFormComponent } from '../components/pass-form-component/AuthFormComponent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-pass';
}
