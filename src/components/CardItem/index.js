import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors, numberWithCommas} from '../../utils';

export default function CardItem({item}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.product_name}</Text>
      <Text style={styles.text}>{item.product_description}</Text>
      <View style={styles.space} />
      <Text style={styles.text}>
        <Text style={styles.label}>Price : </Text>
        Rp. {numberWithCommas(item.product_price)}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Quantity :</Text>
        {numberWithCommas(item.quantity)} pcs
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.primary,
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  space: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  text: {
      fontSize: 15
  }
});
