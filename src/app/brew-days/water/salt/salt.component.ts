import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-salt',
  templateUrl: './salt.component.html',
  styleUrls: ['./salt.component.scss']
})
export class SaltComponent implements OnInit {

  @Input() saltForm: FormGroup;
  @Input() index: number;
  @Output() deleteSalt: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  delete() {
    this.deleteSalt.emit(this.index);
  }

}
