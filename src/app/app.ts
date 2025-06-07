import { Component } from '@angular/core';
import {HomeComponent} from './home/home';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
    HomeComponent,
    HttpClientModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'gondor-chic';
}
