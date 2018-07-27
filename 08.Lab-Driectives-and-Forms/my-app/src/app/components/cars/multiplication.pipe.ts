import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplication'
})
export class MultiplicationPipe implements PipeTransform {

  transform(value: number, times: string): number {
    const numberIsNaN = isNaN(Number(value)) ? 1 : Number(value);
    const timesIsNaN = isNaN(Number(times)) ? 1 : Number(times);
    return numberIsNaN * timesIsNaN;
  }

}
