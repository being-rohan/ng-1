import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  isproductavailable: boolean;
  isproductstatus!: boolean; //// ! >> fakt declare 
  constructor() {
    this.isproductavailable = Math.random() >= .5 ? true : false
    console.log(this.isproductavailable)
  }

  ngOnInit(): void {

  }

}
