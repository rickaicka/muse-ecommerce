import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chips-btn',
  templateUrl: './chips-btn.component.html',
  styleUrls: ['./chips-btn.component.scss']
})
export class ChipsBtnComponent implements OnInit {

  constructor() { }

  @Input() text: String; 
  @Input() typeFilter: String; 
  
  @Output() click = new EventEmitter();
  
  icon = icons.faTimes;
  
  ngOnInit(): void {
  }

  clickedBtn(event: Event) { 
    event.stopPropagation();
    this.click.next(event);
  }

}
