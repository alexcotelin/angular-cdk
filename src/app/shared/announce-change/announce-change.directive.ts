import { AcknowledgeComponent } from './acknowledge/acknowledge.component';
import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  SimpleChanges,
  Input,
  OnChanges,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appAnnounceChange]'
})
export class AnnounceChangeDirective implements OnChanges, OnDestroy {
  @Input() appAnnounceChange: string;
  @Input() appAnnounceChangeAcknowledged;

  private acknowledgeComponentRef;
  private acknowledgeClickedSub: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('Directive changes', changes);
    // If there is no button created, create it
    if (!this.acknowledgeComponentRef && this.appAnnounceChange) {
      this.viewContainer.clear();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AcknowledgeComponent);
      this.acknowledgeComponentRef = this.viewContainer.createComponent(componentFactory);
      this.acknowledgeComponentRef.instance.placeholderTemplateRef = this.templateRef;
      this.acknowledgeClickedSub = this.acknowledgeComponentRef.instance.acknowledgeClicked.subscribe(() => {
        this.appAnnounceChangeAcknowledged();
      });

      // If the button has been already created, make it visible
    } else if (this.acknowledgeComponentRef && this.appAnnounceChange) {
      this.acknowledgeComponentRef.instance.visible = true;
      // Else just add the TemplateRef to the viewContainer and
      // show the element without changes
    } else {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  ngOnDestroy() {
    if (this.acknowledgeComponentRef) {
      this.acknowledgeComponentRef.destroy();
      this.acknowledgeClickedSub.unsubscribe();
    }
  }
}
