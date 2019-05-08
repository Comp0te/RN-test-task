import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import style from './style';
import { staticEndpoint } from '../../../../../shared/constants/apiEndpoint';

import { SafeAreaView, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Image, Divider } from 'react-native-elements';
import AverageRate from '../../../../../shared/components/AverageRate';
import Spinner from '../../../../../shared/components/Spinner';
import ReviewsList from '../../../../../shared/components/ReviewsList';
import CommonButton from '../../../../../shared/components/CommonButton';

import { Dispatch } from 'redux';
import { RootState } from '../../../../../redux/store';
import { NavigationInjectedProps } from 'react-navigation';
import { ProductDetailNavParams } from '../../../../../shared/components/ProductItem';
import { ProductModel } from '../../../../../shared/models/product.model';

import { getIsGetAllReviewsRequestLoading } from '../../../../../redux/requests/requestsEntities/reviews/getAll/selectors';
import { getReviewsAllIds } from '../../../../../redux/reviews/selectors';
import { getIsAuthUser } from '../../../../../redux/auth/selectors';
import { getProductByIdFromNavProps } from '../../../../../redux/products/selectors';
import { requestsAC } from '../../../../../redux/requests/AC';
import { useIsFirstLoading } from '../../../../../shared/hooks/useIsFirstLoading';
import navService from '../../../../../shared/services/nav.service';

interface StateProps {
  isLoadingReviews: boolean;
  reviewsIds: string[];
  isAuthUser: boolean;
  product?: ProductModel;
}

interface DispatchProps {
  getAllReviews(id: string): void;
}

type NavProps = NavigationInjectedProps<ProductDetailNavParams>;

const mapStateToProps = (state: RootState, props: NavProps) => ({
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
  }
);

type Props = StateProps & DispatchProps & NavProps;

const ProductDetailScreen: React.FC<Props> = (props) => {
  const {
    navigation, getAllReviews, product, reviewsIds,
    isLoadingReviews, isAuthUser,
  } = props;

  const productId = navigation.getParam('productId');

  const fetchReviews = useCallback(() => {
    if (productId) {
      getAllReviews(productId);
    }
  }, [productId]);

  useEffect(() => {
    const focusListener = navigation.addListener('willFocus', fetchReviews);
    fetchReviews();

    return () => focusListener.remove();
  }, [fetchReviews]);

  const isFirstLoading = useIsFirstLoading(isLoadingReviews);

  if (!product) {
    return null;
  }

  const imageUri = `${staticEndpoint}${product.img}`;

  const toAddReviewScreen = () => {
    const params: Partial<ProductDetailNavParams> = {
      productId,
    };

    navService.navigate('AddReviewScreen', params);
  };

  const toLoginScreen = () => navService.navigate('LoginScreen');

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
                onRefresh={fetchReviews}
              />
          }
        </View>
      </View>
      {
        isAuthUser ?
          <View style={style.addReviewButtonWrapper}>
            <CommonButton
              title='Add Review'
              onPress={toAddReviewScreen}
              iconName='star'
            />
          </View> :
          <TouchableOpacity
            style={style.signInLinkWrapper}
            onPress={toLoginScreen}
          >
            <Text style={[style.text, style.title]}>Sign in to leave a review.</Text>
          </TouchableOpacity>
      }
    </SafeAreaView>
  );
};

export default connect<StateProps, DispatchProps, NavProps, RootState>(
  mapStateToProps, mapDispatchToProps,
)(ProductDetailScreen);
