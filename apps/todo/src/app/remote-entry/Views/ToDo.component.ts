import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ToDo.component.html',
  styleUrl: './ToDo.component.css',
})
export class ToDoComponent {}
