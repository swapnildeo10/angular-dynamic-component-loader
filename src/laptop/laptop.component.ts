import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css'],
})
export class LaptopComponent implements OnInit {
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
