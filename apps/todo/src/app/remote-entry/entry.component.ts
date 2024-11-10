import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './Views/ToDo.component';

@Component({
  standalone: true,
  imports: [CommonModule, ToDoComponent],
  selector: 'app-todo-entry',
  template: `<app-to-do></app-to-do>`,
})
export class RemoteEntryComponent {}
