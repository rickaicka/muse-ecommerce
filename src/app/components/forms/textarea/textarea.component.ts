import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  focused = false;  
  stateChanges = new Subject<void>();

  constructor(private fm: FocusMonitor, private elRef: ElementRef<HTMLElement>) {
    fm.monitor(elRef, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  
  @Input() labelTextarea: String;
  @Input() placeholderTextarea: String;
  @Input() messageError: String;
  @Input() isRequired: Boolean;
  @Input() textareaModel: String;
  @Output() textareaModelChange = new EventEmitter<String>();
  
  
  public showErrorMessage: Boolean = false;
  
  ngOnInit(): void {
  }

  
  onFocus(element) {
    if(this.isRequired && element.target.value != ""){
      element.target.classList.remove('textarea-error');
      this.showErrorMessage = false;
    }
  }
  onBlur(element) {
    if(this.isRequired && element.target.value == ""){
      element.target.classList.add('textarea-error');
      this.showErrorMessage = true;
    }
  }
}
