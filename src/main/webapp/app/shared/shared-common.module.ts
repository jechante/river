import { NgModule } from '@angular/core';

import { RiverSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RiverSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RiverSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RiverSharedCommonModule {}
