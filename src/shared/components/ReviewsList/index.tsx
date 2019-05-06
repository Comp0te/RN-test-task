import React from 'react';
import style from './style';

import { View, FlatList, ListRenderItem } from 'react-native';
import ReviewItem from '../ReviewItem';

export interface OwnProps {
  isLoadingReviews: boolean;
  reviewsIds: string[];
  onRefresh(): void;
}

type Props = OwnProps;

const ReviewsList: React.FC<Props> = (props) => {
  const {
    reviewsIds, isLoadingReviews, onRefresh,
  } = props;

  const keyExtractor = (id: string) => `${id}`;

  const renderItem: ListRenderItem<string> = ({item}) => {
    return (
      <ReviewItem reviewId={item}/>
    );
  };

  return (
    <View style={style.root}>
      <FlatList
        data={reviewsIds}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onRefresh={onRefresh}
        refreshing={isLoadingReviews}
        initialNumToRender={10}
        maxToRenderPerBatch={2}
      />
    </View>
  );
};

export default React.memo(ReviewsList);
