import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

const EmptyCart = () => {
  return(
    <View style={styles.container}>
      <Feather name="slash" size={38} color="#f3f9ff" />
      <Text style={styles.cartText}>
        Ooohh não, meu carrinho está vazio, tenho que comprar
      </Text>
    </View>
  );
};

export default EmptyCart;
