import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  @Input() marketPrice

  data
  type = 'LineChart'
  columnNames = ["Date", "Market Price"]
  options = {
    hAxis: {
      title: 'Month'
    },
    vAxis: {
      title: 'Temperature'
    }
  }
  width = 550
  height = 400

  ngOnInit(): void {
    console.log(this.marketPrice);
    this.data = this.marketPrice.values.map(item => ({ name: new Date(item.x * 1000).toLocaleDateString("en-US"), value: item.y }))
  }

}
