import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input()
  private tableData: any[];
  @Input()
  private tableJson: any[];

  constructor() { }

  ngOnInit() {
    console.log(this.tableData);
    console.log(this.tableJson);
  }

}
