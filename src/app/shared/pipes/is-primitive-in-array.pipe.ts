import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isPrimitiveInArray',
  standalone: true
})
export class IsPrimitiveInArrayPipe implements PipeTransform {
  transform(value: string | number | boolean, array: any[]): boolean {
    return array.includes(value);
  }
}
