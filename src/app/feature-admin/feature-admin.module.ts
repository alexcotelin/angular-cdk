import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureAdminRoutingModule } from './feature-admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, FeatureAdminRoutingModule, SharedModule, FormsModule, ReactiveFormsModule]
})
export class FeatureAdminModule {}
