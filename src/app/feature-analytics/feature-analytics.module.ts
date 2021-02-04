import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared/shared.module';
import { FeatureAnalyticsRoutingModule } from './feature-analytics-routing.module';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [AnalyticsComponent, BarChartComponent],
  imports: [CommonModule, FeatureAnalyticsRoutingModule, SharedModule, ChartsModule]
})
export class FeatureAnalyticsModule {}
