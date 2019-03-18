import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlApi: string = "http://18.224.199.224:8080/api"
  constructor(
      private http: HttpClient
  ) {

  }

  getClients() {
    return this.http.get(this.urlApi + "/clients");
  }

  getShoppingHistory(card) {
    return this.http.get(this.urlApi + "/shoppinghistory/" + card);
  }
  getCardData(card) {
    return this.http.get(this.urlApi + "/card/" + card);
  }

  getAdvisers() {
    return this.http.get(this.urlApi + "/advisers");
  }
}
