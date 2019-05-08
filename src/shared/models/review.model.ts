export class ReviewModel {
  id: number = 0;
  product: number = 0;
  userId: number = 0;
  rate: number = 0;
  text: string = '';

  constructor(obj: ReviewResponse) {
    for (const field in obj) {
      if (typeof this[field] !== 'undefined') {
        this[field] = obj[field];
      }
    }

    if (obj.created_by && obj.created_by.id) {
      this.userId = obj.created_by.id;
    }
  }
}

export interface ReviewResponse {
  id: number;
  product: number;
  rate: number;
  text: string;
  created_by: {
    id: number;
    username: string;
  };
}

export interface ReviewPostResponse {
  success: boolean;
}