import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutes } from './dashboard.routes';
import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [],
  imports: [DashboardRoutes, CommonModule],
  exports: [],
  providers: [DashboardService],
})
export class DashboardModule {}
