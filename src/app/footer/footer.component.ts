import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  texto = 'Bienvenido';
  constructor() { }

  ngOnInit() {
  }

}
