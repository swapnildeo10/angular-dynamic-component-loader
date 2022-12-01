import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
})
export class TvComponent implements OnInit {
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
