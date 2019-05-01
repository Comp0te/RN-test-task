import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { apiEndpoint } from '../constants/apiEndpoint';

interface IProductsService {
  getAllProducts(): Observable<AjaxResponse>;
}

class ProductsService implements IProductsService {

  getAllProducts() {
    return ajax.get(
      apiEndpoint + 'products/',
      {
        'Content-Type': 'application/json; charset=utf-8',
      },
    );
  }
}

export default new ProductsService();