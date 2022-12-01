import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-refrigerator',
  templateUrl: './refrigerator.component.html',
  styleUrls: ['./refrigerator.component.css'],
})
export class RefrigeratorComponent implements OnInit {
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
