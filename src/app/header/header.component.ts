import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario = "Benedeck Chavez Rdz."
  constructor() { }

  ngOnInit() {
  }

}
