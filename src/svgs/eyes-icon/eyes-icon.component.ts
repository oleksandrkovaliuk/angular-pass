import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eyes-icon',
  standalone: true,
  imports: [],
  templateUrl: './eyes-icon.component.html',
  styleUrl: './eyes-icon.component.scss',
})
export class EyesIconComponent {
  @Input() class: string = 'eyes-icon';
}
