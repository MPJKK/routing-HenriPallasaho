import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routeDirectionToClass'
})
export class RouteDirectionToClassPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if (value === 0) {
          return 'vihrea';
      } else {
          return 'punainen';
      }
  }

}
