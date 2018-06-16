import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
    imports: [
        MatButtonModule,
        MatSidenavModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule
    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule
    ]
})

export class MaterialUIModule {

    constructor() {}
}
