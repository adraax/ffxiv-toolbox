import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { AbstractTuiThemeSwitcher } from '@taiga-ui/cdk';

@Component({
  selector: 'adraax-theme-night',
  standalone: true,
  imports: [],
  template: '',
  styleUrl: './theme-night.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ThemeNightComponent extends AbstractTuiThemeSwitcher{

}
