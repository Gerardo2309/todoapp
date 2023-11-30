import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task} from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Instalar angular',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear Proyecto',
      completed: true
    }
    ,
    {
      id: Date.now(),
      title: 'Crear Componentes',
      completed: false
    }
    ,
    {
      id: Date.now(),
      title: 'Crear aplicacion de tareas',
      completed: false
    }]);

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newtask =  input.value;
    this.addTask(newtask);
  }

addTask(title: string){
  const newtask = {
    id: Date.now(),
    title,
    completed: false
  }
  this.tasks.update((tasks) => [...tasks, newtask]);
}

  deletTask (index: number){
this.tasks.update((tasks) => tasks.filter((task,position) => position !== index));
  }


}
