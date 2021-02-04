import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-acknowledge',
  templateUrl: './acknowledge.component.html',
  styleUrls: ['./acknowledge.component.scss']
})
export class AcknowledgeComponent {
  @Input()
  visible = false;
  @Input()
  placeholderTemplateRef: TemplateRef<any>;

  @Output()
  acknowledgeClicked = new EventEmitter<void>();

  onMouseClick() {
    this.visible = false;
    this.acknowledgeClicked.emit();
  }
}
