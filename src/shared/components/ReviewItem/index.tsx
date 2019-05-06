import React from 'react';
import style from './style';
import { connect } from 'react-redux';

import { ListItem, Rating } from 'react-native-elements';

import { RootState } from '../../../redux/store';
import { ReviewModel } from '../../models/review.model';

import { getReviewByIdFromProps } from '../../../redux/reviews/selectors';
import { getUserByReviewIdFromProps } from '../../../redux/users/selectors';
import { UserModel } from '../../models/user.model';

export interface OwnProps {
  reviewId: string;
}

interface StateProps {
  review?: ReviewModel;
  user?: UserModel;
}

const mapStateToProps = (state: RootState, props: OwnProps): StateProps => ({
  review: getReviewByIdFromProps(state, props),
  user: getUserByReviewIdFromProps(state, props),
});

type Props = OwnProps & StateProps;

const ReviewsItem: React.FC<Props> = (props) => {
  const {
    review, user,
  } = props;

  if (!review || !user) {
    return null;
  }

  const rightElement = (
    <Rating
      type='star'
      ratingCount={5}
      readonly={true}
      startingValue={review.rate}
      imageSize={15}
    />
  );

  return (
    <ListItem
      title={user.username}
      subtitle={review.text}
      rightElement={rightElement}
      titleStyle={style.title}
      bottomDivider={true}
    />
  );
};

export default connect(mapStateToProps)(React.memo(ReviewsItem));
