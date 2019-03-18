import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clients: boolean = true;
  advisers: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showClients() {
    this.clients = true;
    this.advisers = false;
  }

  showAdvisers() {
    this.clients = false;
    this.advisers = true;
  }

}
