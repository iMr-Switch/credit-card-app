import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-advisers',
  templateUrl: './advisers.component.html',
  styleUrls: ['./advisers.component.css']
})
export class AdvisersComponent implements OnInit {
  advisers: any = [];
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getAdvisers().subscribe(data => {
      this.advisers = data;            
    });
  }

}
