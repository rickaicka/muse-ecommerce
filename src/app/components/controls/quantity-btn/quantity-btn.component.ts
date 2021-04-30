import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quantity-btn',
  templateUrl: './quantity-btn.component.html',
  styleUrls: ['./quantity-btn.component.scss']
})
export class QuantityBtnComponent implements OnInit {

  constructor() { }
  
  decreaseIcon = icons.faMinus;
  increaseIcon = icons.faPlus;
  valueQuantity: number = 1;
  
  @Output() click = new EventEmitter();

  ngOnInit(): void {
  }
  
  calculeValueQuantity(type: String, event: Event){
    if(type == 'increase'){
      this.valueQuantity += 1;
    } else if(type == 'decrease'){
      if(this.valueQuantity > 0){
        this.valueQuantity -= 1;
      } else{
        return;
      }
    }
    event.stopPropagation();
    this.click.next(this.valueQuantity);
  }
}
