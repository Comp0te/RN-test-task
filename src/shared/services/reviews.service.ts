import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { apiEndpoint } from '../constants/apiEndpoint';
import authService from './auth.service';
import { switchMap } from 'rxjs/operators';

export interface IReviewPostBody {
  readonly rate: number;
  readonly text: string;
}

export interface IReviewPostInput extends IReviewPostBody {
  readonly product_id: string;
}

interface IReviewsService {
  postReview(input: IReviewPostInput): Observable<AjaxResponse>;
  getAllReviews(product_id: string): Observable<AjaxResponse>;
}

class ReviewsService implements IReviewsService {

  postReview(input: IReviewPostInput) {
    const body: IReviewPostBody = {
      rate: input.rate,
      text: input.text,
    };

    return authService.getToken().pipe(
      switchMap((token) => ajax.post(
        apiEndpoint + `reviews/${input.product_id}`,
        JSON.stringify(body),
        {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Token ${token}`,
        },
      )),
    );
  }

  getAllReviews(product_id: string) {
    return ajax.get(
      apiEndpoint + `reviews/${product_id}`,
      {
        'Content-Type': 'application/json; charset=utf-8',
      },
    );
  }
}

export default new ReviewsService();