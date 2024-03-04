import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { ThemeNightComponent } from '../theme-night/theme-night.component';

@Component({
  selector: 'adraax-main-layout',
  standalone: true,
  imports: [
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    ThemeNightComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
