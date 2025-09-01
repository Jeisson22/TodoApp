import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})

export class Labs {
  protected readonly subtitle = ['Angular 10', 'Angular 11', 'Angular 12'];
}
