import React, {useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getListProduct} from '../../actions';
import {CardItem} from '../../components';
import {colors} from '../../utils';

export default function Home() {
  const {getListProductLoading, getListProductResult, getListProductError} =
    useSelector(state => state.ProductReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);

  const renderItem = ({item}) => <CardItem item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List Product</Text>
      <View style={styles.garis} />
      <SafeAreaView style={{flex: 1}}>
        {getListProductResult ? (
          getListProductResult.length === 0 ? (
            <Text style={styles.title}>Data Not Found</Text>
          ) : (
            <FlatList
              data={getListProductResult}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={250}
              keyExtractor={item => item.id}
            />
          )
        ) : getListProductLoading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : getListProductError ? (
          <Text style={styles.title}>{getListProductError.message}</Text>
        ) : (
          <Text style={styles.title}>Data Not Found</Text>
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 15,
    flex: 1,
  },
  garis: {
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
