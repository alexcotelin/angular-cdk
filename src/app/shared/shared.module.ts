import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContextActionsComponent } from './context-actions/context-actions.component';
import { UIMaterialModule } from './ui-material.module';
import { AnnounceChangeDirective } from './announce-change/announce-change.directive';
import { AcknowledgeComponent } from './announce-change/acknowledge/acknowledge.component';

@NgModule({
  imports: [CommonModule, RouterModule, UIMaterialModule],
  declarations: [ContextActionsComponent, AnnounceChangeDirective, AcknowledgeComponent],
  exports: [ContextActionsComponent, UIMaterialModule, AnnounceChangeDirective, AcknowledgeComponent]
  //   entryComponents: [AcknowledgeComponent]
})
export class SharedModule {}
