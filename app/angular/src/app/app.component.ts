import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WebComponentsDemo } from './web-components-demo';

@Component({
  standalone: true,
  imports: [WebComponentsDemo, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular';
}
