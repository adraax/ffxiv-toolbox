import {
  provideRouter,
  Routes,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ENVIRONMENT_INITIALIZER, importProvidersFrom } from '@angular/core';
import { TUI_SANITIZER, TuiRootModule } from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

export interface CoreOptions {
  routes: Routes;
}

export function provideCore({ routes }: CoreOptions) {
  return [
    // standard default modules
    provideAnimations(),
    provideRouter(
      routes,
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withComponentInputBinding(),
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
    // 3rd party : state management etc.
    importProvidersFrom(TuiRootModule),
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    // app specific providers
    // lastly perform init
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue() {
        // init logic if needed
      },
    },
  ];
}
