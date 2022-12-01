import {
  Component,
  ComponentRef,
  Type,
  VERSION,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DesktopComponent } from '../desktop/desktop.component';
import { LaptopComponent } from '../laptop/laptop.component';
import { MobileComponent } from '../mobile/mobile.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { TvComponent } from './tv/tv.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  components = new Map<string, ComponentRef<any>>();
  index: number = 0;
  productNames: any = {
    laptop: 'laptop',
    mobile: 'mobile',
    tv: 'tv',
    desktop: 'desktop',
    refrigerator: 'refrigerator',
  };
  constructor() {}
  loadComponent(component: string) {
    let type: Type<any> = MobileComponent;
    switch (component) {
      case this.productNames.mobile:
        type = MobileComponent;
        break;
      case this.productNames.laptop:
        type = LaptopComponent;
        break;
      case this.productNames.tv:
        type = TvComponent;
        break;
      case this.productNames.refrigerator:
        type = RefrigeratorComponent;
        break;
      case this.productNames.desktop:
        type = DesktopComponent;
        break;
    }

    return type;
  }

  createComponent(componentName: any) {
    // this.container.clear();
    let component = this.container.createComponent(
      this.loadComponent(componentName)
    );
    let uniqueName = `${componentName} - ${this.index}`;
    component.instance.name = uniqueName;
    component.instance.closed.subscribe((res) => {
      this.deleteComponent(res.name);
    });
    this.components.set(uniqueName, component);
    this.index++;
  }

  deleteComponent(component: string) {
    if (this.components.has(component)) {
      this.components.get(component).destroy();
      this.components.delete(component);
    }
  }
  ngOninit(): void {}
}
