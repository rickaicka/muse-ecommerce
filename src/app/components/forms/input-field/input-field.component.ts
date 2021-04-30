import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  focused = false;  
  stateChanges = new Subject<void>();
  
  constructor(private fm: FocusMonitor, private elRef: ElementRef<HTMLElement>) {
    
  fm.monitor(elRef, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }
  
  @Input() labelInput: String;
  @Input() placeholderInput: String;
  @Input() hasIcon: any;
  @Input() typeInput: String;
  @Input() messageError: String;
  @Input() isRequired: Boolean;
  @Input() inputModel: String;
  @Output() inputModelChange = new EventEmitter<String>();
  
  
  public showErrorMessage: Boolean = false;

  ngOnInit(): void {
    this.hasIcon = icons[this.hasIcon];
  }
  
  onFocus(element) {
    if(this.isRequired && element.target.value != ""){
      element.target.classList.remove('input-error');
      this.showErrorMessage = false;
    }
  }
  onBlur(element) {
    if(this.isRequired && element.target.value == ""){
      element.target.classList.add('input-error');
      this.showErrorMessage = true;
    }
  }
}
