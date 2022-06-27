import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import styles from './styles';

export default FCart = () => {
  const navigation = useNavigation();

  const RouteCart = () => {
    navigation.navigate('Cart');
  }

  return(
    <View
      style={ styles.container }
    >
      <TouchableOpacity
        onPress={() => RouteCart()}
        style={ styles.cartBtn }
      >
        <Feather name="shopping-cart" size={24} color="#f3f9ff" />
        <Text
          style={ styles.cartBtnText}
        >
          2 itens
        </Text>
        <View
          style={ styles.cartPrice}
        >
          <Text
            style={ styles.totalPrice}
          >
            R$ 200,00
            <Feather name="chevron-right" size={24} color="#f3f9ff" />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
