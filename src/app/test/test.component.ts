import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //ngIf
  displayName = false;
  
  //ngSwitch
  color = "";
  redClass = "red-success";
  blueClass = "blue-success";

  //ngFor
  public colors = ["red","blue","green"];

  //Component Interaction Parent to Child
  @Input('parentData') name:any; 

  //Component Interaction Parent to Child
  @Output() childEvent = new EventEmitter();

  clickEvent(){
    this.childEvent.emit("Hi Parent From Child");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
