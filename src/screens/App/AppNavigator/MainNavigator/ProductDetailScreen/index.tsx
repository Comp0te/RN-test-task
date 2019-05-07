import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import style from './style';
import { staticEndpoint } from '../../../../../shared/constants/apiEndpoint';

import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import { Image, Divider } from 'react-native-elements';
import AverageRate from '../../../../../shared/components/AverageRate';
import Spinner from '../../../../../shared/components/Spinner';
import ReviewsList from '../../../../../shared/components/ReviewsList';

import { Dispatch } from 'redux';
import { RootState } from '../../../../../redux/store';
import { IReviewPostInput } from '../../../../../shared/services/reviews.service';
import { NavigationInjectedProps } from 'react-navigation';
import { ProductDetailNavParams } from '../../../../../shared/components/ProductItem';
import { ProductModel } from '../../../../../shared/models/product.model';

import { getIsGetAllReviewsRequestLoading } from '../../../../../redux/requests/requestsEntities/reviews/getAll/selectors';
import { getReviewsAllIds } from '../../../../../redux/reviews/selectors';
import { getIsAuthUser } from '../../../../../redux/auth/selectors';
import { getProductByIdFromNavProps } from '../../../../../redux/products/selectors';
import { requestsAC } from '../../../../../redux/requests/AC';
import { useIsFirstLoading } from '../../../../../shared/hooks/useIsFirstLoading';

interface StateProps {
  isLoadingReviews: boolean;
  reviewsIds: string[];
  isAuthUser: boolean;
  product?: ProductModel;
}

interface DispatchProps {
  getAllReviews(id: string): void;
  postReview(input: IReviewPostInput): void;
}

const mapStateToProps = (state: RootState, props: Props): StateProps => ({
  isLoadingReviews: getIsGetAllReviewsRequestLoading(state),
  reviewsIds: getReviewsAllIds(state),
  product: getProductByIdFromNavProps(state, props),
  isAuthUser: getIsAuthUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => (
  {
    getAllReviews: (id) => {
      dispatch(requestsAC.getAllReviews.Actions.getAllReviews(id));
    },
    postReview: (input) => {
      dispatch(requestsAC.postReview.Actions.postReview(input));
    },
  }
);

type Props = StateProps & DispatchProps & NavigationInjectedProps<ProductDetailNavParams>;

const ProductDetailScreen: React.FC<Props> = (props) => {
  const {
    navigation, getAllReviews, product, reviewsIds,
    isLoadingReviews,
  } = props;

  const productId = navigation.getParam('productId');

  const onRefresh = useCallback(() => {
    if (productId) {
      getAllReviews(productId);
    }
  }, [productId]);

  useEffect(() => {
    onRefresh();
  }, [onRefresh]);

  const isFirstLoading = useIsFirstLoading(isLoadingReviews);

  if (!product) {
    return null;
  }

  const imageUri = `${staticEndpoint}${product.img}`;

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.root}>
        <Image
          source={{
            uri: imageUri,
            cache: 'default',
          }}
          style={style.image}
          PlaceholderContent={<Spinner/>}
          placeholderStyle={style.placeholderStyle}
        />
        <AverageRate productId={productId}/>
        <ScrollView style={style.productTextWrapper}>
          <Text style={style.text}>{product.text}</Text>
        </ScrollView>
        <Text style={[style.text, style.title]}>Reviews</Text>
        <Divider/>
        <View style={style.reviewListWrapper}>
          {
            isFirstLoading ?
              <Spinner/> :
              <ReviewsList
                reviewsIds={reviewsIds}
                isLoadingReviews={isFirstLoading ? false : isLoadingReviews}
                onRefresh={onRefresh}
              />
          }
        </View>
      </View>
    </SafeAreaView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailScreen);
