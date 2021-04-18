import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-btn',
  templateUrl: './filter-btn.component.html',
  styleUrls: ['./filter-btn.component.scss']
})
export class FilterBtnComponent implements OnInit {

  constructor() { }

  @Input() text: String; 
  @Input() typeFilter: String; 
  
  @Output() click = new EventEmitter();
  
  ngOnInit(): void {
  }

  clickedBtn(event: Event) { 
    event.stopPropagation();
    this.click.next(event);
  }
}
