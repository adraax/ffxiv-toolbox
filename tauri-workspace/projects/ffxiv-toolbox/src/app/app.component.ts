import { Component } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@Component({
  selector: 'adraax-root',
  standalone: true,
  imports: [MainLayoutComponent],
  template: `<adraax-main-layout/>`,
    providers: []
})
export class AppComponent {}
