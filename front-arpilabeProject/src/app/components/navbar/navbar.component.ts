import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  urlImage = "https://www.umaneo.fr/wp-content/uploads/2020/01/Arpilabe-2.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
