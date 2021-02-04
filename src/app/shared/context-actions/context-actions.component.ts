import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef
} from '@angular/core';
import { CdkPortal, DomPortalOutlet, Portal } from '@angular/cdk/portal';

@Component({
  selector: 'app-context-actions',
  templateUrl: './context-actions.component.html',
  styleUrls: []
})
export class ContextActionsComponent implements AfterViewInit, OnDestroy {
  private contextActionsContainerPortalOutlet: DomPortalOutlet;
  @ViewChild(CdkPortal) portal: CdkPortal;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  ngAfterViewInit(): void {
    // Create a portalHost from a DOM element
    this.contextActionsContainerPortalOutlet = new DomPortalOutlet(
      document.querySelector('#context-actions-container'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    // Attach portal to host
    this.contextActionsContainerPortalOutlet.attach(this.portal);
  }

  ngOnDestroy(): void {
    this.contextActionsContainerPortalOutlet.detach();
  }
}
