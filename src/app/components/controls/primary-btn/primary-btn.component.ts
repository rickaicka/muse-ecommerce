import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.scss']
})
export class PrimaryBtnComponent implements OnInit {

  constructor() { }
  
  @Input() text: String;  
  @Input() isBlocked = false;
  @Input() disabled = false;
  @Input() hasIcon: any;
  @Output() click = new EventEmitter();
  
  ngOnInit(): void {
    this.hasIcon = icons[this.hasIcon]
  }
  
  clickedBtn(event: Event) { 
    event.stopPropagation();
    this.click.next(event);
  }
}
