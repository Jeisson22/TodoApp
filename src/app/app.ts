import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('todoapp');
  protected readonly subtitle = ['Angular 10', 'Angular 11', 'Angular 12'];
}