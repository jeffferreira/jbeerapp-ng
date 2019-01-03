import { Component, OnInit } from '@angular/core';
import { IRecipe, Recipe } from 'app/shared/model/recipe/recipe';
import { UploadFileService } from './upload/upload-file.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { TableListService } from './table-list.service';
import { ExclusionDialogComponent } from 'app/shared/components/dialog/exclusion-dialog.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  recipes: IRecipe[];
  selectedFiles: FileList;
  currentFileUpload: File;
  filter: string = '';

  constructor(
    private uploadService: UploadFileService,
    private dialog: MatDialog,
    private service: TableListService
  ) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.service.findAll().subscribe(
        (res: HttpResponse<IRecipe[]>) => {
            this.recipes = res.body;
        },
        (res: HttpErrorResponse) => console.log(res.message)
    );
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }

  init(recipe: IRecipe){

  }

  view(recipe: IRecipe){

  }

  openExclusionModal(recipe: IRecipe) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        title: 'Confirmação'
    };

    const dialogRef = this.dialog.open(ExclusionDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.subscribeToSaveResponse(this.service.delete(recipe.id), 'Registro excluído com sucesso');
      }
    });
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<IRecipe>>, message: string) {
    result.subscribe((res: HttpResponse<IRecipe>) => this.onSaveSuccess(message), (res: HttpErrorResponse) => this.onSaveError())
  }

  private onSaveSuccess(message: string) {
   
  }

  private onSaveError() {
     
  }

}
