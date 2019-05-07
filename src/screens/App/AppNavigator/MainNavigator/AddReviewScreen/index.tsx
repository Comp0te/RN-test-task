import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { greyColor } from '../../../../../app.style';
import style from './style';

import {
  View, SafeAreaView,
  KeyboardAvoidingView, ScrollView, Platform,
} from 'react-native';
import { Input, AirbnbRating } from 'react-native-elements';
import CommonButton from '../../../../../shared/components/CommonButton';

import { RootState } from '../../../../../redux/store';
import { NavigationInjectedProps } from 'react-navigation';

import { getIsLoginRequestLoading } from '../../../../../redux/requests/selectors';
import { requestsAC } from '../../../../../redux/requests/AC';
import { IReviewPostInput } from '../../../../../shared/services/reviews.service';
import { ProductDetailNavParams } from '../../../../../shared/components/ProductItem';

interface StateProps {
  isLoading: boolean;
}

interface DispatchProps {
  postReview(input: IReviewPostInput): void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  isLoading: getIsLoginRequestLoading(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => (
  {
    postReview: (input) => {
      dispatch(requestsAC.postReview.Actions.postReview(input));
    },
  }
);

type Props = StateProps & DispatchProps & NavigationInjectedProps<ProductDetailNavParams>;

const AddReviewScreen: React.FC<Props> = (props) => {
  const {postReview, isLoading, navigation} = props;
  const [reviewRate, setReviewRate] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');

  const productId = navigation.getParam('productId');

  const onFinishRating = (value: number) => setReviewRate(value);
  const onChangeText = (value: string) => setReviewText(value);

  const submitAddReview = () => {
    postReview({
      product_id: productId,
      rate: reviewRate,
      text: reviewText,
    });
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <ScrollView contentContainerStyle={style.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={style.root}
        >
          <Input
            value={reviewText}
            onChangeText={onChangeText}
            multiline={true}
            numberOfLines={6}
            placeholder='Write your review here'
            placeholderTextColor={greyColor}
            inputStyle={style.inputText}
            containerStyle={style.containerStyle}
            inputContainerStyle={style.inputContainerStyle}
            textAlignVertical='top'
          />
          <View style={style.rateWrapper}>
            <AirbnbRating
              defaultRating={1}
              count={5}
              showRating={false}
              onFinishRating={onFinishRating}
            />
          </View>
          <CommonButton
            title='ADD REVIEW'
            loading={isLoading}
            disabled={isLoading}
            onPress={submitAddReview}
            iconName='star'
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewScreen);
