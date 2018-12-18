import { Component, OnInit } from '@angular/core';
import { IRecipe, Recipe } from 'app/shared/model/recipe/recipe';
import { Style } from 'app/shared/model/recipe/style';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  recipes: IRecipe[] = [];

  constructor() { }

  ngOnInit() {
    var recipe = new Recipe(
      '18. American Pale Ale', 
        'Tudo Grão', 
        '', 
        '', 
        '', 
        '', 
        '', 
        '18/12/2018', 
        '', 
        '', 
        '20,00 l', 
        '', 
        '', 
        null, 
        null, 
        null, 
        new Style('American Pale Ale', 'American Ale', 'Ale'),
        null
    );
    this.recipes[0] =recipe;

  }

}
