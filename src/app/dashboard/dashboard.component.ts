import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private ds: DataServiceService) { }

  ngOnInit() {
  }

  getAspInfo() {
    this.ds.aspInfo().subscribe(console.log);
  }

  getPHPinfo() {
    this.ds.phpInfo().subscribe(console.log);
  }

  getWebInfo() {
    this.ds.webInfo().subscribe(console.log);
  }
  
}
