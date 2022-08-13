import React, { useState, useMemo } from 'react';
import { 
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity 
} from 'react-native';
import EmptyCart from '../../components/Empty';

import { Feather } from '@expo/vector-icons';

import styles from './styles';
import formatValue from '../../utils/format';

export default Cart = () => {
  const [products, setProducts] = useState([]);

  const cartSize = useMemo(() => {
    if (products.length > 1 || products.length === 0) {
      return `${products.length} itens`
    }
  
    if (products.length === 1) {
      return `${products.length} item`
    }

  }, [products]);

  const total = useMemo(() => {
    const value = products.reduce((acc, product) => {
      const totalPrice = acc + (product.price * product.quantity);
      return totalPrice;
    }, 0);
    return formatValue(value);
  }, [products]);

  return(
    <SafeAreaView style={ styles.container }>
      <View
        style={ styles.productContainer }
      >
        <FlatList
          style={ styles.productList }
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<EmptyCart />}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({item}) => (
            <View style={styles.product}>
              <Image
                style={styles.productImg}
                source={{ uri: item.image_url}}
              />
              <View style={styles.productTitleContainer}>
                <Text
                  style={styles.productTitle}
                >
                  {item.title}
                </Text>
                <View style={styles.productPriceContainer}>
                  <Text
                    style={styles.productSinglePrice}
                  >
                    {formatValue(item.price)}
                  </Text>
                  <View style={styles.productPriceContainer}>
                    <Text
                      style={styles.productQuantity}
                    >
                      {`${item.quantity} X`}
                    </Text>
                    <Text style={styles.totalPrice}>
                      {formatValue(item.price * item.quantity)}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.actionContainer}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={styles.actionBtn}
                >
                  <Feather name="plus" size={16} color="#e83f5b" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {}}
                  style={styles.actionBtn}
                >
                  <Feather name="minus" size={16} color="#e83f5b" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.totalProductContainer}>
        <Feather name="shopping-cart" size={24} color="#fff" />
        <Text style={styles.totalProduct}>{cartSize}</Text>
        <Text style={styles.subTotal}>{total}</Text>
      </View>
    </SafeAreaView>
  );
};
