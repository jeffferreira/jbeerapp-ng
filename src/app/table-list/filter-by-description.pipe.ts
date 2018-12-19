import { Pipe, PipeTransform } from '@angular/core';
import { IRecipe } from 'app/shared/model/recipe/recipe';

@Pipe({
    name: 'filterByDescription'
})
export class FilterByDescription implements PipeTransform {
    
    transform(list: IRecipe[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();

        if(descriptionQuery){
            return list.filter(
                c => c.name.toLowerCase().includes(descriptionQuery)
            );
        } else {
            return list;
        }
    }

}