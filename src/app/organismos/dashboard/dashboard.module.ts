import { NgModule } from '@angular/core';
import { DashboardRoutes } from './dashboard.routes';
import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [],
  imports: [DashboardRoutes],
  exports: [],
  providers: [DashboardService],
})
export class DashboardModule {}
