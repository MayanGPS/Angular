import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  interpolacion = 'Interpolación de strings';
  url='#';
  activo = false;

  constructor() { }

  ngOnInit() {
  }

}
