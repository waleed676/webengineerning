import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor(private ds: DataServiceService) { }

  ngOnInit() {
  }

  ASPassignment: any;
  PHPassignment: any;
  AngularAssignment: any;

  getAspAssignments() {
    this.ds.aspAssignments().subscribe( response => { this.ASPassignment = response } );
  }

  getPHPassignments() {
    this.ds.phpAssignments().subscribe( response => { this.PHPassignment = response } ); 
  }

  getAngularAssignments() {
    this.ds.angularAssignments().subscribe( response => { this.AngularAssignment = response } );
  }

}
