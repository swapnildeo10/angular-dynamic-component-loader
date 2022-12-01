import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
})
export class DesktopComponent implements OnInit {
  @Input('name') name: string = '';
  @Output() closed = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  close() {
    this.closed.emit({
      name: this.name,
    });
  }
}
