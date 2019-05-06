import React from 'react';
import { Rating } from 'react-native-elements';
import { View, Text } from 'react-native';
import style from './style';

export interface OwnProps {
  averageRate: number;
}

type Props = OwnProps;

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

export default React.memo(AverageRate);