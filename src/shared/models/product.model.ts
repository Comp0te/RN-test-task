export class ProductModel {
  id: number = 0;
  img: string = '';
  text: string = '';
  title: string = '';

  constructor(obj: ProductModel) {
    for (const field in obj) {
      if (typeof this[field] !== 'undefined') {
        this[field] = obj[field];
      }
    }
  }
}
