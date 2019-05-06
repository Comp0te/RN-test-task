import React from 'react';
import style from './style';

import { View, FlatList, ListRenderItem } from 'react-native';
import ProductItem from '../ProductItem';
import CommonSearchBar from '../CommonSearchBar';

export interface OwnProps {
  isLoadingProducts: boolean;
  productsIds: string[];
  searchQuery: string;
  onRefresh(): void;
  onSearchProducts(query: string): void;
}

type Props = OwnProps;

const ProductsList: React.FC<Props> = (props) => {
  const {
    productsIds, isLoadingProducts, searchQuery, onRefresh, onSearchProducts,
  } = props;

  const keyExtractor = (id: string) => `${id}`;

  const renderItem: ListRenderItem<string> = ({item}) => {
    return (
      <ProductItem productId={item}/>
    );
  };

  const getItemLayout = (data: string[] | null, index: number) => (
    {length: 78, offset: 0.3, index}
  );

  return (
    <View style={style.root}>
      <CommonSearchBar
        placeholder='Search by product name'
        onChangeText={onSearchProducts}
        value={searchQuery}
      />
      <FlatList
        data={productsIds}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onRefresh={onRefresh}
        refreshing={isLoadingProducts}
        initialNumToRender={10}
        maxToRenderPerBatch={2}
        getItemLayout={getItemLayout}
      />
    </View>
  );
};

export default React.memo(ProductsList);
