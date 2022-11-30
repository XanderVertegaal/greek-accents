import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent {
  @Input() isOn = false;
  @Output() switchOn = new EventEmitter<boolean>();

  constructor() { }

  toggle(): void {
    this.isOn = !this.isOn;
    this.switchOn.emit(this.isOn);
  }

}
