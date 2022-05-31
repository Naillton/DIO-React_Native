import React from 'react'
import { View, Image, Text } from 'react-native';

import eu from '../../assets/eu.jpg';
import styles from './styles';

export default IMG = () => {
  return (
    <View
      style={ styles.container }
    >
      <Image
        source={ eu }
        style={ styles.img }
      />
      <Text style={ styles.nome }>Nailton JR.</Text>
      <Text style={ styles.cargo }>Desenvolvedor Web e Mobile</Text>
    </View>
  );
}