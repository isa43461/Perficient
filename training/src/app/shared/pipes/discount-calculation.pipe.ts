import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../products.model';

@Pipe({
  name: 'discountCalculation'
})
export class DiscountCalculationPipe implements PipeTransform {

  transform(item: Products, ...args: unknown[]): number {
    return item.price - (item.price * item.discount);
  }

}
