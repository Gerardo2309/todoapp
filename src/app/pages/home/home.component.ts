import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tasks = signal([
    'Instalar angular',
    'Crear Proyecto',
    'Crear Componentes',
    'Crear aplicacion de tareas'
  ]);

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newtask =  input.value;
    this.tasks.update((tasks) => [...tasks, newtask]);
  }

  deletTask (index: number){
this.tasks.update((tasks) => tasks.filter((task,position) => position !== index));
  }


}
