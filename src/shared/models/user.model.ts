import {ReviewResponse} from './review.model';

export class UserModel {
  id: number = 0;
  username: string = '';

  constructor(obj: ReviewResponse) {
    for (const field in obj.created_by) {
      if (typeof this[field] !== 'undefined') {
        this[field] = obj.created_by[field];
      }
    }
  }
}