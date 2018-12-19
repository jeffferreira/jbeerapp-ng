import { NgModule } from "@angular/core";
import { ExclusionDialogComponent } from "./exclusion-dialog.component";
import { CommonModule } from "@angular/common";
import { MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
    declarations:[
        ExclusionDialogComponent
    ],
    exports: [
        ExclusionDialogComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule
    ]
})
export class ExclusionDialogModule {

}