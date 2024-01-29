import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDToEGP'
})
export class UsdToEgpPipe implements PipeTransform {

  transform(usd:number , rate:number = 30): number {
    return usd * rate ;
  }

}
