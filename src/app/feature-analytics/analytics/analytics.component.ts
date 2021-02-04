import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {
  barChartDataSet = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  barChartDataSetLive$ = interval(5000).pipe(
    map(i => [
      {
        data: [
          i,
          59,
          Math.floor(Math.random() * 100) + 1,
          Math.floor(Math.random() * 100) + 1,
          56,
          55,
          Math.floor(Math.random() * 100) + 1
        ],
        label: 'Series A'
      },
      {
        data: [28, i, Math.floor(Math.random() * 100) + 1, 19, 86, 27, Math.floor(Math.random() * 100) + 1],
        label: 'Series B'
      }
    ]),
    startWith(this.barChartDataSet)
  );

  onAcknowledgedClick() {
    alert('Acknlowledged?');
  }
}
