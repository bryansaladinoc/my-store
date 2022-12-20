import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vocalToNumber'
})
export class VocalToNumberPipe implements PipeTransform {

  transform(value: string): any {
    const array = value.split('');

    array.forEach((value, index) => {
      if (value == 'a' || value == 'A') array[index] = '4';
      if (value == 'e' || value == 'E') array[index] = '3';
      if (value == 'i' || value == 'I') array[index] = '1';
      if (value == 'o' || value == 'O') array[index] = '0';
    });

    return array.join('');
  }

}
