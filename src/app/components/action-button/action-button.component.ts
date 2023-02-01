import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {

  @Input() label!: string;
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  onClickButton(event: any) {
    this.onClick.emit(event);
  }

}
