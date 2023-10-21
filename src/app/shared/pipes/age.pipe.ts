import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {
  transform(birthdate: string): number {
    const SEPARATOR = '-';
    const [birthYear, birthMonth, birthDay] = birthdate.split(SEPARATOR).map(item => Number(item));

    const currentDate: Date = new Date();
    const age: number = currentDate.getFullYear() - birthYear;
    const currentMonth = currentDate.getMonth();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDay)) {
      return age - 1;
    }

    return age;
  }
}
