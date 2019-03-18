import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any = [];
  selectedCard: any = {
    card: "",
    data: null,
    history: []
  };
  constructor(
    private api: ApiService,
  ) { }

  ngOnInit() {
    this.api.getClients().subscribe(data => {
      this.clients = data;            
    });
  }

  ViewShoppingHistory(card) {
    this.api.getShoppingHistory(card).subscribe((data:any) => {
      this.selectedCard.card = card;      
      this.selectedCard.history = data;    
    });
    this.api.getCardData(card).subscribe((data:any) => {
      this.selectedCard.data = data[0];
    });    
  }

}
