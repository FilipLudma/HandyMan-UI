import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { IntroComponent }    from './intro.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'index', component: IntroComponent}
]);