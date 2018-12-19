import { Component, OnInit } from '@angular/core';
import { IRecipe, Recipe } from 'app/shared/model/recipe/recipe';
import { Style } from 'app/shared/model/recipe/style';
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

  recipes: IRecipe[] = [];
  selectedFiles: FileList;
  currentFileUpload: File;
  filter: string = '';

  constructor(
    private uploadService: UploadFileService,
    private dialog: MatDialog,
    private service: TableListService
  ) { }

  ngOnInit() {
    var recipe = new Recipe(
      '18. American Pale Ale', 
        'Tudo Grão', 
        '', '', '', '', '', 
        '18/12/2018', 
        '', '', 
        '20,00 l', 
        '', '', null, null, null, 
        new Style('American Pale Ale', 'American Ale', 'Ale'),
        null
    );

    var recipe1 = new Recipe(
      '19. Pilsen', 
        'Tudo Grão', 
        '', '', '', '', '', 
        '25/12/2018', 
        '', '', 
        '20,00 l', 
        '', '', null, null, null, 
        new Style('German Pilsen', 'Pilsen', 'Lager'),
        null
    );

    var recipe2 = new Recipe(
      '20. IPA', 
        'Tudo Grão', 
        '', '', '', '', '', 
        '25/08/2018', 
        '', '', 
        '20,00 l', 
        '', '', null, null, null, 
        new Style('American IPA', 'ALE', 'ALE'),
        null
    );

    this.recipes[0] =recipe;
    this.recipes[1] =recipe1;
    this.recipes[2] =recipe2;

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
        this.subscribeToSaveResponse(this.service.delete(recipe), 'Registro excluído com sucesso');
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
