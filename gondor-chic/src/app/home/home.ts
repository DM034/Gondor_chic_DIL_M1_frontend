import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  product = {
    name: 'Potion des Istari',
    price: 50,
    stock: 20,
  };
}
