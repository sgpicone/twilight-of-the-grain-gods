import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brew-days-list',
  templateUrl: './brew-days-list.component.html',
  styleUrls: ['./brew-days-list.component.scss']
})
export class BrewDaysListComponent implements OnInit {

  curPage = 1;
  itemsPerPage = 10;
  brewDays = Array.from(Array(100).keys());

  constructor() { }

  ngOnInit() {
  }

}
