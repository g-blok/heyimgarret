import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByShow',
})
export class FilterByShowPipe implements PipeTransform {
  transform(projects: any[], show: boolean = true): any[] {
    if (!projects) return [];
    return projects.filter((project) => project.show === show);
  }
}
