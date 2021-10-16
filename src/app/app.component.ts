import { Component } from '@angular/core';
import { Product } from './product.model';

//Decorador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  widthImg = 10;
  name = 'Julian';
  age = 33;
  img = 'https://source.unsplash.com/random';
  btnDisable = true;
  register = {
    name: '',
    email: '',
    password: '',
  }
  person = {
    name : 'Fernanda',
    age: 27,
    avatar: 'https://source.unsplash.com/random'
  };
  person2 = {
    name : 'Luisa',
    age: 26,
    avatar: './assets/img/mohammad.jpg'
  };

  names : string[] = ['Juan', 'Paula', 'Fredy', 'Yessica', 'Beto' ];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'blue'
  }
  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/img/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/img/bike.jpg'
    },
    {
      name: 'Colección de albumnes',
      price: 34,
      image: './assets/img/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/img/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/img/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/img/glasses.jpg'
    }
  ]

  toggleButton(){
    this.btnDisable = !this.btnDisable;
  }
  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }
  
  deleteUser(index: number){
    this.names.splice(index, 1);

  }
  onRegister(){
    console.log(this.register)
  }
}
