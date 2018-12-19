import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NgxPaginationModule } from 'ngx-pagination'; 
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { UploadFileService } from 'app/table-list/upload/upload-file.service';
import { FilterByDescription } from 'app/table-list/filter-by-description.pipe';
import { SearchModule } from 'app/shared/components/search/search.module';
import { ExclusionDialogModule } from 'app/shared/components/dialog/exclusion-dialog.module';
import { ExclusionDialogComponent } from 'app/shared/components/dialog/exclusion-dialog.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    FilterByDescription
  ],
  imports: [
    RouterModule.forChild(AdminLayoutRoutes),
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    TranslateModule,
    NgxPaginationModule,
    SearchModule,
    ExclusionDialogModule
  ],
  providers :[
    UploadFileService
  ],
  entryComponents: [
    ExclusionDialogComponent
]
})

export class AdminLayoutModule {}
