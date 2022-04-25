import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  // dropDownList: any;
  active_status = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
