import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola soy una variable declarada desde el componente';
  tasks = [
    'Instalar angular',
    'Crear Proyecto',
    'Crear Componentes'
  ];

  tasks2 = signal([
    'Instalar angular',
    'Crear Proyecto',
    'Crear Componentes'
  ]);

  name = signal("Gerardo");
  age = 23;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'pedro',
    age: 25,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  clcickhandler() {
    alert('Hola Gracias por hacer click')
  }

  changehandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newvallue =input.value;
    this.name.set(newvallue)
    console.log(input.value);

  }

  keydownhandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

}
