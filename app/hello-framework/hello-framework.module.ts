import { NgModule } from '@angular/core';

import { MaterialModule, SharedModule } from '../shared';
import { ShowToolTipDirective } from './show-tool-tip.directive';
import { HelloFrameworkComponent } from './hello-framework.component';

@NgModule({
  declarations: [HelloFrameworkComponent, ShowToolTipDirective],
  exports: [HelloFrameworkComponent],
  imports: [SharedModule, MaterialModule],
})
export class HelloFrameworkModule {}
