import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PassForm } from '../components/pass-form-component/pass-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PassForm],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-pass';
}
