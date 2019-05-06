import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import style from './style';

import { SafeAreaView, View } from 'react-native';
import ProductsList from '../../../../../../shared/components/ProductsList';
import Spinner from '../../../../../../shared/components/Spinner';

import { Dispatch } from 'redux';
import { RootState } from '../../../../../../redux/store';

import { getIsGetAllProductsRequestLoading } from '../../../../../../redux/requests/requestsEntities/products/getAll/selectors';
import { getFilteredProductsIds, getProductSearchQuery } from '../../../../../../redux/products/selectors';
import { requestsAC } from '../../../../../../redux/requests/AC';
import * as productAC from '../../../../../../redux/products/AC';
import { useIsFirstLoading } from '../../../../../../shared/hooks/useIsFirstLoading';

interface StateProps {
  isLoadingProducts: boolean;
  productsIds: string[];
  searchQuery: string;
}

interface DispatchProps {
  getAllProducts(): void;
  searchProducts(query: string): void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  isLoadingProducts: getIsGetAllProductsRequestLoading(state),
  productsIds: getFilteredProductsIds(state),
  searchQuery: getProductSearchQuery(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => (
  {
    getAllProducts: () => {
      dispatch(requestsAC.getAllProducts.Actions.getAllProducts());
    },
    searchProducts: (query: string) => {
      dispatch(productAC.Actions.setSearchQuery(query));
    },
  }
);

type Props = StateProps & DispatchProps;

const ProductsScreen: React.FC<Props> = (props) => {
  const {
    productsIds, isLoadingProducts, getAllProducts, searchProducts, searchQuery,
  } = props;

  useEffect(() => {
    getAllProducts();
  }, []);

  const onRefresh = useCallback(() => {
    getAllProducts();
  }, []);

  const onSearchProducts = useCallback((query: string) => {
    searchProducts(query);
  }, []);

  const isFirstLoading = useIsFirstLoading(isLoadingProducts);

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.root}>
        {
          isFirstLoading ?
            <Spinner/> :
            <ProductsList
              productsIds={productsIds}
              isLoadingProducts={isFirstLoading ? false : isLoadingProducts}
              onRefresh={onRefresh}
              onSearchProducts={onSearchProducts}
              searchQuery={searchQuery}
            />
        }
      </View>
    </SafeAreaView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);
