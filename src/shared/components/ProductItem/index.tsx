import React, { useCallback } from 'react';
import style from './style';
import { connect } from 'react-redux';
import { staticEndpoint } from '../../constants/apiEndpoint';
import { mainColor } from '../../../app.style';

import { ListItem, Image, Icon } from 'react-native-elements';
import { Spinner } from '../Spinner';

import { RootState } from '../../../redux/store';
import { ProductModel } from '../../models/product.model';

import { getProductByIdFromProps } from '../../../redux/products/selectors';
import navService from '../../../shared/services/nav.service';

export interface OwnProps {
  productId: string;
}

export interface ProductDetailNavParams extends OwnProps {
  productTitle: string;
}

interface StateProps {
  product?: ProductModel;
}

const mapStateToProps = (state: RootState, props: OwnProps): StateProps => ({
  product: getProductByIdFromProps(state, props),
});

type Props = OwnProps & StateProps;

const ProductsItem: React.FC<Props> = (props) => {
  const {
    product, productId,
  } = props;

  const onPressIcon = useCallback(() => {
    const params: ProductDetailNavParams = {
      productId,
      productTitle: product ? product.title : '',
    };

    navService.navigate('ProductDetailScreen', params);
  }, [productId]);

  if (!product) {
    return null;
  }

  const imageUri = `${staticEndpoint}${product.img}`;

  const leftElement = (
    <Image
      source={{
        uri: imageUri,
        cache: 'default',
      }}
      style={style.image}
      PlaceholderContent={<Spinner size='small'/>}
      placeholderStyle={style.placeholderStyle}
    />
  );

  const rightElement = (
    <Icon
      name='chevron-right'
      type='font-awesome'
      color={mainColor}
      size={16}
      onPress={onPressIcon}
    />
  );

  return (
    <ListItem
      title={product.title}
      leftElement={leftElement}
      rightElement={rightElement}
      titleStyle={style.title}
      bottomDivider={true}
    />
  );
};

export default connect(mapStateToProps)(React.memo(ProductsItem));
