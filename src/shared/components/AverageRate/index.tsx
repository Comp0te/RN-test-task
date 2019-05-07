import React from 'react';
import style from './style';
import { connect } from 'react-redux';

import { Rating } from 'react-native-elements';
import { View, Text } from 'react-native';

import { RootState } from '../../../redux/store';

import { getAverageReviewRateOfProduct } from '../../../redux/reviews/selectors';

interface OwnProps {
  productId: string;
}

interface StateProps {
  averageRate: number;
}

const mapStateToProps = (state: RootState, props: OwnProps): StateProps => ({
  averageRate: getAverageReviewRateOfProduct(state, props),
});

type Props = OwnProps & StateProps;

export const AverageRate: React.FC<Props> = (props) => {
  const {averageRate} = props;

  return (
    <View style={style.root}>
      <Text style={style.rate}>Average rate: </Text>
      <Rating
        type='star'
        ratingCount={5}
        readonly={true}
        startingValue={averageRate}
        imageSize={20}
      />
      <Text style={style.rate}>{averageRate}</Text>
    </View>
  );
};

export default connect(mapStateToProps)(AverageRate);