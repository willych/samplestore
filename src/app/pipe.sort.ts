import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})

export class SortPipe implements PipeTransform {
    transform(pipeData, args: string): Array<string> {
        pipeData.sort((a: any, b: any) => {
            if(args == "pricelowhi") { //Sort items from lowest price to highest
                if (a.price > b.price) {
                    return -1;
                } else if (a.price < b.price) {
                    return 1;
                } else {
                    return 0;
                }
            } else if(args == "pricehilow") { //Sort items from highest price to lowest
                if (a.price < b.price) {
                    return -1;
                } else if (a.price > b.price) {
                    return 1;
                } else {
                    return 0;
                }
            } else if(args == "toprated") { //Sort items from highest rating to lowest
                if (a.rating > b.rating) {
                    return -1;
                } else if (a.rating < b.rating) {
                    return 1;
                } else {
                    return 0;
                }
            }
            else {
                if (a.id < b.id) {
                    return -1;
                } else if (a.id > b.id) {
                    return 1;
                } else {
                    return 0;
                }
            }
        });
    return pipeData;
    }
}